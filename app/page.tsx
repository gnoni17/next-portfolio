import Image from "next/image";
import { Rampart_One } from "next/font/google";
import clsx from "clsx";
import { ContactForm } from "./_components/ContactForm";

const rampartFont = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const stack = [
    {
      name: "html",
    },
    {
      name: "css",
    },
    {
      name: "javascript",
    },
    {
      name: "typescript",
    },
    {
      name: "react",
    },
    {
      name: "vue",
    },
    {
      name: "tailwind",
    },
  ];

  return (
    <main>
      <section className="container flex items-center justify-between gap-4 max-sm:flex-wrap h-screen mt-4">
        <div>
          <h1 className={clsx([rampartFont.className, "text-4xl mb-2 font-semibold"])}>Gnoni Gabriele</h1>
          <h2 className={clsx([rampartFont.className, "text-5xl mb-4 font-semibold"])}>
            <span className="text-blue-500">Frontend</span> developer
          </h2>

          <p className="max-w-[500px] mb-8">
            Benvenuti nel mio portfolio! Sono un web developer, specializzato nello sviluppo fronte-end. Mi dedico alla
            creazione di soluzioni web e mobile innovative e performanti.
          </p>

          <button
            className="btn btn-primary"
            type="button"
          >
            Contattami
          </button>
        </div>

        <Image
          src="/images/portfolio-image1.webp"
          alt="image"
          width={400}
          height={400}
        />
      </section>

      <section className="container min-h-screen flex flex-col justify-center">
        <h3 className={clsx([rampartFont.className, "text-5xl font-semibold text-center mb-12"])}>About me</h3>

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

        <div className="flex gap-4 flex-wrap w-full">
          {stack.map(e => (
            <div
              key={e.name}
              className="flex-1 flex flex-col items-center justify-center gap-1 border border-slate-600 rounded-md p-1 bg-slate-800 hover:bg-slate-700 duration-200"
            >
              <Image
                src={`/images/technology/${e.name}.svg`}
                alt={e.name}
                width={50}
                height={50}
              />
              <span>{e.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container h-screen flex flex-col justify-center">
        <h3 className={clsx([rampartFont.className, "text-5xl font-semibold text-center mb-12"])}>Contact me</h3>
        <ContactForm />
      </section>
    </main>
  );
}
