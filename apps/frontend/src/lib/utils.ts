import { DateError } from "@/use-cases/error";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { format } from "date-fns/format";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, formatString = "dd/mm/yyyy") {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new DateError();
  }

  return format(date, formatString);
}
