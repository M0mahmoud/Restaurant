"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function ReservationPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto">
                <div className="text-center mb-8 space-y-2">
                    <h1 className="text-primary text-3xl font-bold">
                        Reserve Table
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Please fill the form below accurately to enable us serve
                        you better!.. welcome!
                    </p>
                </div>

                <ReservationForm />
            </div>
        </div>
    );
}

function ReservationForm() {
    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState<string>("6:00");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        // Handle form submission
        console.log({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            guests: formData.get("guests"),
            date: date,
            time: time,
            type: formData.get("type"),
            specialRequests: formData.get("specialRequests"),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid place-content-center gap-4 w-full">
                <div className="flex items-center gap-2 w-full">
                    <div className="space-y-1 w-full">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            required
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-1 w-full">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="space-y-1 w-ful">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="myname@example.com"
                        required
                        className="focus:border-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-1 w-ful">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        required
                        className="focus:border-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    />
                </div>

                {/* Number of Guests */}
                <div className="space-y-1 w-ful">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min={0}
                        max={20}
                        required
                        className="focus:border-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    />
                </div>

                {/* Reservation Date & Time */}
                <div className="space-y-1 w-ful">
                    <Label>Reservation</Label>
                    <div className="grid gap-4">
                        <div className="rounded-md flex gap-2">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                                disabled={(date) => date < new Date()}
                                components={{
                                    IconLeft: () => (
                                        <ChevronLeft className="h-4 w-4" />
                                    ),
                                    IconRight: () => (
                                        <ChevronRight className="h-4 w-4" />
                                    ),
                                }}
                            />

                            <div className="flex gap-4 flex-col w-full">
                                <Button
                                    type="button"
                                    variant={
                                        time === "6:00" ? "default" : "outline"
                                    }
                                    className="flex-1"
                                    onClick={() => setTime("6:00")}
                                >
                                    6:00 PM
                                </Button>
                                <Button
                                    type="button"
                                    variant={
                                        time === "7:00" ? "default" : "outline"
                                    }
                                    className="flex-1"
                                    onClick={() => setTime("6:00")}
                                >
                                    7:00 PM
                                </Button>
                                <Button
                                    type="button"
                                    variant={
                                        time === "8:00" ? "default" : "outline"
                                    }
                                    className="flex-1"
                                    onClick={() => setTime("8:00")}
                                >
                                    8:00 PM
                                </Button>
                                <Button
                                    type="button"
                                    variant={
                                        time === "9:00" ? "default" : "outline"
                                    }
                                    className="flex-1"
                                    onClick={() => setTime("9:00")}
                                >
                                    9:00 PM
                                </Button>
                                <Button
                                    type="button"
                                    variant={
                                        time === "10:00" ? "default" : "outline"
                                    }
                                    className="flex-1"
                                    onClick={() => setTime("10:00")}
                                >
                                    10:00 PM
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reservation Type */}
                <div className="space-y-1 w-ful">
                    <Label>Reservation Type</Label>
                    <Select name="type" required>
                        <SelectTrigger>
                            <SelectValue placeholder="Please Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="anniversary">
                                Anniversary
                            </SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-1 w-ful">
                    <Label htmlFor="specialRequests">
                        Any special requests
                    </Label>
                    <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        placeholder="Enter any special requests or notes"
                        className="min-h-[100px]"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-white transition-colors"
                >
                    Reserve Now!
                </Button>
            </div>
        </form>
    );
}
