import React from 'react'

export function ServerError({ haveError, errorMessage }: { haveError: boolean; errorMessage: string | null }) {
  return haveError ? (
    <div className="flex gap-3 bg-slate-700 border border-red-600 p-4 rounded-md">
      <div className="size-10 flex items-center justify-center bg-red-500 p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-around flex-1 mt-1">
        <span className="font-semibold block leading-4">Errore</span>
        <span className="text-sm text-gray-400 leading-4">
          {errorMessage ? errorMessage : 'Ops, qualcosa è andato storto'}
        </span>
      </div>
    </div>
  ) : null
}
