'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendEmail } from '../app/actions/sendEmail'
import { ContactSchema, ContactSchemaType } from '@/schemas/contactSchemas'
import { FormItem } from './FormItem'
import { ServerError } from './ServerError'
import clsx from 'clsx'

type RequestStatusType = 'initial' | 'pending' | 'success' | 'error'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactSchemaType>({ resolver: zodResolver(ContactSchema) })

  const [requestStatus, setRequestStatus] = useState<RequestStatusType>('initial')
  const [serverError, setServerError] = useState<null | string>(null)

  const onSubmit: SubmitHandler<ContactSchemaType> = async data => {
    setRequestStatus('pending')
    setServerError(null)

    try {
      await sendEmail(data)
      setRequestStatus('success')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setServerError(err.message)
      setRequestStatus('error')
    }
  }

  function resetForm() {
    reset()
    setServerError(null)
    setRequestStatus('initial')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 border border-gray-700 bg-slate-800 p-4 rounded-md"
    >
      <label className="hidden">
        <input type="text" {...register('surname')} />
      </label>

      <FormItem label="Nome e Cognome / Azienda" error={errors.name}>
        <input type="text" {...register('name')} autoComplete="off" />
      </FormItem>

      <FormItem label="Email" error={errors.email}>
        <input type="email" {...register('email')} autoComplete="off" />
      </FormItem>

      <FormItem label="Messaggio" error={errors.message}>
        <textarea className="-mb-1" {...register('message')} autoComplete="off"></textarea>
      </FormItem>

      <ServerError haveError={requestStatus === 'error'} errorMessage={serverError} />

      <div className="flex justify-end gap-4">
        <button type="button" onClick={resetForm} className="btn btn-outline w-fit">
          Pulisci
        </button>

        <button
          type="submit"
          className={clsx([
            'btn btn-primary',
            {
              'btn-primary': requestStatus !== 'success',
              'btn-success': requestStatus === 'success'
            }
          ])}
          disabled={requestStatus === 'pending' || requestStatus === 'success'}
        >
          {requestStatus === 'pending' && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="size-5 animate-spin fill-blue-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {(requestStatus === 'initial' || requestStatus === 'error') && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          )}

          {requestStatus === 'success' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}
