import { motion } from 'framer-motion';

const detailedSections = [
  {
    id: 'fuerza',
    title: 'FUERZA',
    subtitle: 'POTENCIA Y RESISTENCIA',
    description: 'Desarrolla tu capacidad de generar fuerza máxima y mantenerla en el tiempo. Trabajamos con pesos libres, máquinas y ejercicios de bodyweight para construir una base sólida.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop&q=90',
    points: [
      'Entrenamiento de fuerza máxima',
      'Hipertrofia muscular',
      'Resistencia de fuerza',
      'Técnica de movimiento'
    ],
    accent: 'text-accent-green'
  },
  {
    id: 'velocidad',
    title: 'VELOCIDAD',
    subtitle: 'EXPLOSIVIDAD',
    description: 'Mejora tu capacidad de generar potencia en el menor tiempo posible. Fundamental para cualquier disciplina deportiva.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=800&fit=crop&q=90',
    points: [
      'Plyometría',
      'Sprints y aceleraciones',
      'Potencia reactiva',
      'Movimientos explosivos'
    ],
    accent: 'text-accent-orange'
  },
  {
    id: 'coordinacion',
    title: 'COORDINACIÓN',
    subtitle: 'CONTROL Y PRECISIÓN',
    description: 'Mejora la comunicación entre tu cerebro y tus músculos. Entrena el control corporal total para movimientos más eficientes y seguros.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&q=90',
    points: [
      'Propriocepción',
      'Equilibrio dinámico',
      'Movilidad articular',
      'Patrones de movimiento'
    ],
    accent: 'text-accent-yellow'
  },
  {
    id: 'resistencia',
    title: 'RESISTENCIA',
    subtitle: 'CAPACIDAD AERÓBICA',
    description: 'Entrena tu sistema cardiovascular y metabólico para rendir al máximo cuando tu cuerpo parece querer rendirse.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=800&fit=crop&q=90',
    points: [
      'Entrenamiento de Endurance',
      'Trabajo de condición física',
      'Recuperación activa',
      'Capacidad aeróbica y anaeróbica'
    ],
    accent: 'text-accent-green'
  }
];

export function DetailedTraining() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {detailedSections.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id}
          className="section-grain relative py-16 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <motion.div 
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-green px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                      {section.subtitle}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="lg:w-1/2 w-full text-center lg:text-left"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${section.accent}`}>
                  {section.title}
                </h2>
                
                <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent-green via-accent-orange to-accent-yellow" />
                
                <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed">
                  {section.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 rotate-45 bg-accent-green flex-shrink-0" />
                      <span className="text-sm sm:text-base text-text-muted">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Back to top button */}
                <button
                  onClick={() => scrollToSection('training-areas')}
                  className="mt-8 flex items-center gap-2 text-sm text-text-muted hover:text-accent-green transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Volver a disciplinas
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}