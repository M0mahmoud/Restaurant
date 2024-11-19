"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { fetchFromApi } from "@/lib/api";
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const { data, status } = await fetchFromApi(
                "/api/auth/signup",
                "POST",
                user,
            );
            if (status === "error" || status === "fail") {
                setError(data.msg || "An error occurred during sign in");
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
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full space-y-8">
                <div className="flex justify-center">
                    <Link href="/" className="text-xl font-bold text-primary">
                        <Image
                            src={"/logo.svg"}
                            width={147}
                            height={51}
                            alt=""
                        />
                    </Link>
                </div>

                {/* Sign Up Form */}
                <div className="">
                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your details to sign up for FoodTime
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Full Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="w-full"
                                required
                                value={user.name}
                                onChange={(e) =>
                                    setUser((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </div>
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
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
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
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                checked={user.terms}
                                onCheckedChange={(checked) => {
                                    setUser((prev) => ({
                                        ...prev,
                                        terms: checked as boolean,
                                    }));
                                }}
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the{" "}
                                <Link
                                    href="/terms"
                                    className="text-primary hover:underline"
                                >
                                    terms and conditions
                                </Link>
                            </label>
                        </div>
                        <Button type="submit" className="w-full">
                            {isLoading ? (
                                <Loader className="size-5 animate-spin" />
                            ) : (
                                "Sign Up"
                            )}
                        </Button>

                        {error && (
                            <Alert variant="destructive" className="mt-4">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signin"
                            className="text-primary hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
