'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { sendEmail } from '../app/actions/sendEmail'
import { ContactSchema, ContactSchemaType } from '@/schemas/contactSchemas'
import { FormItem } from './FormItem'
import { ServerError } from './ServerError'

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

    try {
      await sendEmail(data)
      setRequestStatus('success')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setServerError(err.message)
      setRequestStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 border border-gray-700 bg-slate-800 p-4 rounded-md"
    >
      <label className="hidden">
        <input type="text" {...register('surname')} />
      </label>

      <FormItem label="Nome" error={errors.name}>
        <input type="text" {...register('name')} />
      </FormItem>

      <FormItem label="Email" error={errors.email}>
        <input type="email" {...register('email')} />
      </FormItem>

      <FormItem label="Messaggio" error={errors.message}>
        <textarea {...register('message')}></textarea>
      </FormItem>

      <ServerError haveError={requestStatus == 'error'} errorMessage={serverError} />

      <div className="flex justify-end gap-4">
        <button type="button" onClick={() => reset()} className="btn btn-outline w-fit">
          Pulisci
        </button>

        <button type="submit" className="btn btn-primary w-fit">
          {requestStatus === 'pending' ? 'Invio in corso...' : 'Invia'}
        </button>
      </div>
    </form>
  )
}
