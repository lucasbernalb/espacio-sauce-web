import { motion } from 'framer-motion';

const trainingImage = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop&q=90";

const methodologyPoints = [
  "Entrenamiento funcional basado en movimientos reales",
  "Progresión individualizada según tu nivel y objetivos",
  "Evaluación continua y ajustes periódicos",
  "Enfoque en prevención de lesiones y rendimiento deportivo"
];

export function TrainingOverview() {
  return (
    <section className="section-grain relative bg-surface px-4 py-16 sm:py-20 lg:py-24 lg:px-8">
      <div className="vignette" />
      
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Image - Left side */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={trainingImage}
                alt="Training methodology"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-accent-green/90 px-4 py-2 rounded-lg">
                  <span className="text-sm font-bold uppercase tracking-wider text-black">
                    Metodología
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text - Right side */}
          <motion.div 
            className="lg:w-1/2 w-full text-center lg:text-left"
            initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent-orange font-semibold">
              Enfoque
            </span>
            
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text">
              ENTRENAMIENTO{' '}
              <span className="text-accent-green">FUNCIONAL</span>
            </h2>

            <div className="mt-6 h-px w-16 bg-gradient-to-r from-accent-green via-accent-yellow to-accent-orange" />

            <p className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
              No entrenamos músculos aislados. Entrenamos{' '}
              <span className="text-text font-medium">movimientos</span>. 
              Nuestro enfoque se basa en preparar tu cuerpo para las demandas 
              reales del deporte y la vida cotidiana.
            </p>

            <ul className="mt-8 space-y-4">
              {methodologyPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="mt-1.5 h-2 w-2 rotate-45 bg-accent-green flex-shrink-0" />
                  <span className="text-sm sm:text-base text-text-muted">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}