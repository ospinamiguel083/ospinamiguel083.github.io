import miguelPhoto from '../assets/miguel-ospina.jpg'

export default function Hero() {
  return (
    <header className="relative border-b border-inkline overflow-hidden">
      {/* Fondo decorativo: la cuadrícula con su desvanecido, aislada del contenido */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none" aria-hidden="true" />
      
      <div className="scanline" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-5 sm:px-10 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
          <div className="flex-1">
            <p className="font-mono text-xs sm:text-sm text-glowCyan mb-6">
              <span className="text-accent">$</span> whoami
            </p>

            <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-[1.08] text-paper">
              Miguel Angel
              <br />
              Ospina Ospina
            </h1>

            <p className="mt-6 text-base sm:text-xl text-paperdim max-w-xl">
              Desarrollador de software en formación. Construyo, pruebo y aprendo
              con un rango amplio de herramientas — de Java a React, de SQL a NoSQL.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="focus-ring inline-flex items-center px-5 py-3 bg-accent text-inkFixed font-semibold rounded-sm shadow-[0_0_24px_-6px_rgba(255,107,53,0.7)] hover:bg-orange-400 transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="focus-ring inline-flex items-center px-5 py-3 border border-inkline text-paper rounded-sm hover:border-glowCyan hover:text-glowCyan transition-colors"
              >
                Escribirme
              </a>
              <a
                href="/cv-miguel-ospina.pdf"
                download
                className="focus-ring inline-flex items-center px-5 py-3 border border-inkline text-paper rounded-sm hover:border-glowCyan hover:text-glowCyan transition-colors"
              >
                Descargar CV
              </a>
            </div>
          </div>

          {/* Foto de perfil, con el mismo lenguaje visual de "placa" del resto del sitio */}
          <div className="plate w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 shrink-0 mx-auto lg:mx-0 border border-inkline text-glowCyan overflow-hidden bg-surface">
            <img
              src={miguelPhoto}
              alt="Foto de Miguel Angel Ospina Ospina"
              className="w-full h-full object-cover grayscale-[15%] contrast-105"
            />
          </div>
        </div>

        {/* Ficha técnica: una placa de datos rápidos, como la etiqueta de especificaciones de un plano */}
        <dl className="plate text-glowCyan mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-2xl border border-inkline bg-surface backdrop-blur-sm p-5 sm:p-6">
          <div>
            <dt className="font-mono text-xs text-glowCyan/80">Rol</dt>
            <dd className="text-paper mt-1 text-sm">Desarrollador de software en formación</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-glowCyan/80">Semestre</dt>
            <dd className="text-paper mt-1 text-sm">5° semestre</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-glowCyan/80">Institución</dt>
            <dd className="text-paper mt-1 text-sm">I.U. Pascual Bravo</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-glowCyan/80">Ubicación</dt>
            <dd className="text-paper mt-1 text-sm">Medellín, Colombia</dd>
          </div>
        </dl>
      </div>
    </header>
  )
}
