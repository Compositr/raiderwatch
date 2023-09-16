import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateDateToDay(date: Date): Date {
  date.setHours(0, 0, 0, 0)
  return date
}

export function truncated30d() {
  const date = new Date()
  date.setHours(0, 0, 0, 0) // Set time to the start of the current day
  date.setDate(date.getDate() - 30) // Subtract 30 days
  return date
}

export function truncated1h() {
  const date = new Date()
  date.setHours(date.getHours(), 0, 0, 0) // Set time to the start of the hour
  date.setDate(date.getHours() - 1) // Subtract 1 hour
  return date
}
