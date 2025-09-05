import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Core utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export all utilities
export * from "./currency-utils";
export * from "./score-utils";
export * from "./text-utils";
