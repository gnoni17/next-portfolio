import Image from 'next/image'
import { Rampart_One } from 'next/font/google'
import clsx from 'clsx'
import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import { capitalize } from '@/utils/capitalize'

const rampartFont = Rampart_One({ subsets: ['latin'], weight: '400' })

export default function Home() {
  const stack = ['html', 'css', 'javascript', 'typescript', 'react', 'vue', 'tailwind', 'laravel']

  return (
    <main>
      <section
        id="hero"
        className="container flex items-center justify-between gap-12 max-sm:flex-wrap pb-12 pt-24 xl:min-h-screen"
      >
        <div>
          <h1 className={clsx([rampartFont.className, 'text-2xl sm:text-3xl mb-2 font-semibold'])}>Gnoni Gabriele</h1>
          <h2 className={clsx([rampartFont.className, 'text-5xl mb-6 font-semibold'])}>
            <span className="text-blue-500">Frontend</span> developer
          </h2>

          <p className="max-w-[500px] mb-8">
            Benvenuti nel mio portfolio! Sono un web developer, specializzato nello sviluppo fronte-end. Mi dedico alla
            creazione di soluzioni web e mobile innovative e performanti.
          </p>

          <Link href="#contact">
            <button className="btn btn-primary" type="button">
              Contattami
            </button>
          </Link>
        </div>

        <Image src="/images/hero.png" alt="image" width={550} height={400} />
      </section>

      <section id="about" className="container flex flex-col justify-center py-12 xl:min-h-screen">
        <h3 className={clsx([rampartFont.className, 'text-5xl font-semibold text-center mb-12'])}>Chi sono</h3>

        <p className="mb-4">
          Sono un frontend developer con esperienza nello sviluppo di interfacce intuitive e moderne, utilizzando
          tecnologie come Vue, React e Laravel. Negli ultimi anni, ho lavorato a diversi progetti, tra cui gestionali
          personalizzati e siti web responsive, contribuendo a creare esperienze utente fluide e funzionali.
        </p>

        <p className="mb-4">
          La mia passione per il design e la tecnologia mi spinge a trovare soluzioni innovative, mantenendo sempre un
          occhio di riguardo per l&apos;estetica e le prestazioni. Amo affrontare nuove sfide e imparare costantemente
          per migliorare le mie competenze.
        </p>

        <p className="mb-8">
          Nel tempo libero mi dedico a disegnare e a migliorare le mie abilità fisiche, praticando palestra e nuoto.
          Credo nell&apos;importanza di bilanciare creatività, tecnica e benessere personale.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-wrap w-full">
          {stack.map(e => (
            <div
              key={e}
              className="flex-1 flex flex-col items-center justify-center gap-1 border border-slate-600 rounded-md p-1 bg-slate-800 hover:bg-slate-700 duration-200"
            >
              <Image
                src={`/images/technology/${e == 'laravel' ? `${e}.png` : `${e}.svg`}`}
                alt={e}
                width={50}
                height={50}
              />
              <span>{capitalize(e)}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container flex flex-col justify-center py-12 xl:min-h-screen">
        <h3 className={clsx([rampartFont.className, 'text-5xl font-semibold text-center mb-12'])}>Contattami</h3>
        <ContactForm />
      </section>
    </main>
  )
}
