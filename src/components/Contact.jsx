import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
// 1. Importamos los iconos desde la misma librería que usas en Skills
import { SiGithub, SiGmail } from 'react-icons/si' 

const FORMSPREE_ID = 'xnpqddgg'

// 2. Quitamos el 'value' de texto y agregamos la propiedad 'Icon' a cada objeto
const links = [
  { label: 'Correo personal', Icon: SiGmail, href: 'mailto:ospinamiguel083@gmail.com' },
  { label: 'Correo institucional', Icon: SiGmail, href: 'mailto:miguel.ospna955@pascualbravo.edu.co' },
  { label: 'GitHub', Icon: SiGithub, href: 'https://github.com/ospinamiguel083' },
]

function ContactForm() {
  const [status, setStatus] = useState('idle') 
  const configured = FORMSPREE_ID !== 'TU_FORM_ID'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!configured) return
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!configured) {
    return (
      <div className="plate border border-dashed border-inkline bg-surface p-6 max-w-md text-glowCyan mb-10">
        <p className="text-paper text-sm">
          El formulario está casi listo: falta conectar tu cuenta de
          Formspree. Mira el README del proyecto para el paso a paso (toma
          menos de 5 minutos).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mb-12 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-teal mb-1">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="focus-ring w-full bg-surface border border-inkline rounded-sm px-4 py-2 text-paper"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-teal mb-1">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="focus-ring w-full bg-surface border border-inkline rounded-sm px-4 py-2 text-paper"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-teal mb-1">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="focus-ring w-full bg-surface border border-inkline rounded-sm px-4 py-2 text-paper resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="focus-ring inline-flex items-center px-5 py-3 bg-accent text-inkFixed font-semibold rounded-sm hover:bg-orange-400 transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'sent' && (
        <p className="text-glowCyan text-sm">¡Mensaje enviado! Te responderé pronto.</p>
      )}
      {status === 'error' && (
        <p className="text-accent text-sm">
          Algo falló al enviar. Escríbeme mejor directo a mi correo abajo.
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-10 py-16 sm:py-20 border-t border-inkline">
      <SectionHeading index="07" title="Contacto" id="contacto" />
      <p className="text-paperdim max-w-xl mb-8">
        ¿Tienes una oportunidad, un proyecto o simplemente quieres conversar
        sobre desarrollo de software? Escríbeme por el formulario o por
        cualquiera de estos medios.
      </p>

      <ContactForm />

      <ul className="max-w-xl divide-y divide-inkline border-t border-b border-inkline">
        {links.map((link) => {
          const Icon = link.Icon // Extraemos el componente del icono
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="focus-ring flex items-center justify-between py-4 group"
              >
                <span className="text-teal text-sm">{link.label}</span>
                {/* 3. Renderizamos el icono aquí en vez de link.value */}
                <Icon className="text-3xl text-paper group-hover:text-accent transition-colors" />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}