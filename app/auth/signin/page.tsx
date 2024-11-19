"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { fetchFromApi } from "@/lib/api";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
    email: string;
    password: string;
}

export default function SignIn() {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
    });

    return (
        <div className=" flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
                {/* Login Form */}
                <div className="w-full">
                    <div className="space-y-2">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary"
                        >
                            <Image
                                src={"/logo.svg"}
                                width={147}
                                height={51}
                                alt=""
                            />
                        </Link>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            {isOtpSent ? "Enter OTP" : "Log in to your account"}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {isOtpSent
                                ? "We've sent a 6-digit code to your email"
                                : "Enter your details to access your account"}
                        </p>
                    </div>

                    {!isOtpSent ? (
                        <LoginForm
                            setIsOtpSent={setIsOtpSent}
                            user={user}
                            setUser={setUser}
                            setError={setError}
                        />
                    ) : (
                        <OTPForm email={user?.email} setError={setError} />
                    )}

                    {error && (
                        <Alert variant="destructive" className="mt-4">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        No account yet?{" "}
                        <Link
                            href="/auth/signup"
                            className="text-primary hover:underline"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

function LoginForm({
    user,
    setUser,
    setIsOtpSent,
    setError,
}: {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setIsOtpSent: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const { data, status } = await fetchFromApi(
                "/api/auth/signin",
                "POST",
                user,
            );
            if (status === "error" || status === "fail") {
                setError(data.msg || "An error occurred during sign in");
                setIsOtpSent(false);
            } else {
                setIsOtpSent(true);
            }
        } catch {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form onSubmit={handleSignIn} className="mt-8 space-y-4">
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full"
                    required
                    value={user.email}
                    onChange={(e) =>
                        setUser((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Password
                </label>
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full pr-10"
                        required
                        value={user.password}
                        onChange={(e) =>
                            setUser((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                >
                    Forgot Password?
                </Link>
            </div>
            <Button type="submit" className="w-full">
                {isLoading ? (
                    <Loader className="size-5 animate-spin" />
                ) : (
                    "Log in"
                )}
            </Button>
        </form>
    );
}

function OTPForm({
    email,
    setError,
}: {
    email: string;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const { data, status } = await fetchFromApi(
                "/api/auth/verify-otp",
                "POST",
                { email, otp },
            );
            if (status === "error" || status === "fail") {
                setError(data.msg || "Invalid OTP. Please try again.");
            } else {
                router.push("/");
            }
        } catch {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form onSubmit={handleOtpSubmit} className="my-8">
            <div className="flex flex-col justify-between gap-5 mx-auto">
                <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e)}
                    pattern={REGEXP_ONLY_DIGITS}
                    className="w-full mx-auto"
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <Button type="submit">
                    {" "}
                    {isLoading ? (
                        <Loader className="size-5 animate-spin" />
                    ) : (
                        "Submit"
                    )}
                </Button>
            </div>
        </form>
    );
}
