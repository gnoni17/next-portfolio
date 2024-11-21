import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(3, 'Il nome deve avere minimo 3 caratteri.'),
  email: z.string().email('Inserisci un email valida'),
  message: z.string().min(10, 'Il messaggio deve contenere minimo 10 caratteri'),
  surname: z.string().nullable()
})

export type ContactSchemaType = z.infer<typeof ContactSchema>
