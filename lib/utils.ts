import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateDateToDay(date: Date): Date {
  date.setHours(0, 0, 0, 0)
  return date
}
