"use client";

import * as React from "react";
import { Sun } from "lucide-react";

export function ThemeToggle() {
    // Light theme only - no toggle functionality
    return (
        <div
            className="relative p-2 rounded-md bg-gray-100 border border-gray-200"
            aria-label="Light theme"
        >
            <div className="relative w-5 h-5">
                <Sun className="h-full w-full text-orange-500" />
            </div>
        </div>
    );
}
