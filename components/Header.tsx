"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const { setTheme, theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="container mx-auto sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={"/"}>
                            <Image
                                src={"/logo.svg"}
                                width={147}
                                height={51}
                                alt=""
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/auth/signin"
                            className="text-primary hover:text-secondary-foreground px-3 py-2 text-base font-medium"
                        >
                            SignIn
                        </Link>
                        <Link
                            href="/services"
                            className="text-primary hover:text-secondary-foreground px-3 py-2 text-base font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            href="/reservation"
                            className="text-primary hover:text-secondary-foreground px-3 py-2 text-base font-medium"
                        >
                            Reservation
                        </Link>
                        <Link
                            href="/contact"
                            className="text-primary hover:text-secondary-foreground px-3 py-2 text-base font-medium"
                        >
                            Contact us
                        </Link>
                    </nav>

                    {/* Login Button and Dark Mode Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90"
                        >
                            Login
                        </Link>

                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="p-2 rounded-md text-primary hover:text-secondary-foreground hover:bg-primary"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="p-2 rounded-md text-primary hover:text-secondary-foreground hover:bg-primary"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary-foreground hover:bg-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/30 backdrop-blur-sm">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-secondary-foreground hover:bg-primary"
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-secondary-foreground hover:bg-primary"
                    >
                        Services
                    </Link>
                    <Link
                        href="/reservation"
                        className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-secondary-foreground hover:bg-primary"
                    >
                        Reservation
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-secondary-foreground hover:bg-primary"
                    >
                        Contact us
                    </Link>
                    <Link
                        href="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
