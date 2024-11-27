import Image from 'next/image'
import { Rampart_One } from 'next/font/google'
import clsx from 'clsx'
import { ContactForm } from '@/components/ContactForm'
import Link from 'next/link'
import { capitalize } from '@/utils/capitalize'
import { OpacitySection } from '@/components/OpacitySection'

const rampartFont = Rampart_One({ subsets: ['latin'], weight: '400' })

export default function Home() {
  const stack = ['html', 'css', 'javascript', 'typescript', 'react', 'vue', 'tailwind', 'laravel']

  return (
    <main>
      <OpacitySection
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
      </OpacitySection>

      <OpacitySection id="about" className="container flex flex-col justify-center py-12 xl:min-h-screen">
        <h3 className={clsx([rampartFont.className, 'text-5xl font-semibold text-center mb-12'])}>Chi sono</h3>

        <p className="mb-4">
          Sono un frontend developer con un esperienza di 2 anni nel campo. Negli ultimi anni, ho lavorato a diversi
          progetti, tra cui la realizzazione di gestionali aziendali e siti web, utilizzando prevalentemente tecnologie
          come Vue, React e Laravel.
        </p>

        <p className="mb-4">
          La mia passione per la programmazione mi spinge a mantenermi sempre aggiornato sulle nuove tecnologie e ad
          imparare costantemente per migliorare le mie competenze.
        </p>

        <p className="mb-8">
          Nel tempo libero mi é sempre piaciuto praticare sport, infatti ne ho praticato diversi tra cui judo,
          muay-thai, palestra e nuoto. Ma mi piace anche rimanere creativo con il disegno.
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
      </OpacitySection>

      <OpacitySection id="contact" className="container flex flex-col justify-center py-12 xl:min-h-screen">
        <h3 className={clsx([rampartFont.className, 'text-5xl font-semibold text-center mb-12'])}>Contattami</h3>
        <ContactForm />
      </OpacitySection>
    </main>
  )
}
