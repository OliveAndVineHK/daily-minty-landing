import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes intelligently.
 * Later classes override earlier ones for the same property.
 *
 * Usage:
 *   cn('p-4 bg-red-500', condition && 'bg-blue-500', 'p-6')
 *   → 'bg-blue-500 p-6'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}