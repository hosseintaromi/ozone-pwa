import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full service-tile */
export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes)) || undefined;
}
