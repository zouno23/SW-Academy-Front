import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const GetAbbr = (name:string)=>{
  const NameWords = name?.split(" ")
  return (NameWords[0]?.charAt(0)?.toUpperCase()+(NameWords[1]?.charAt(0)?.toUpperCase() || ""))
}