// components/ui/Input.tsx
import React from "react"
import { cn } from "./lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
