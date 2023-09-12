import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateDateToDay(date: Date): Date {
  date.setHours(0, 0, 0, 0)
  return date
}

export function truncated30d() {
  const date = new Date();
  date.setHours(0, 0, 0, 0); // Set time to the start of the current day
  date.setDate(date.getDate() - 30); // Subtract 30 days
  return date;
}
