import React from 'react'
import { FieldError } from 'react-hook-form'

interface FormItemI extends React.PropsWithChildren {
  error: FieldError | undefined
  label: string
}

export function FormItem({ children, error, label }: FormItemI) {
  return (
    <label>
      <span className="text-sm block mb-1">{label}</span>
      {children}
      <span className="text-sm text-red-500">{error && <span>{error.message}</span>}</span>
    </label>
  )
}
