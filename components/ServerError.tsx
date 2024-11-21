import React from 'react'

export function ServerError({ haveError, errorMessage }: { haveError: boolean; errorMessage: string | null }) {
  return haveError ? (
    <div className="bg-slate-700 border border-red-500 p-4 rounded-md flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-5 text-red-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>

      <span className="text-sm text-red-500 font-semibold">
        {errorMessage ? errorMessage : 'Ops, qualcosa è andato storto'}
      </span>
    </div>
  ) : null
}
