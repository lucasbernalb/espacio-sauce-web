import { motion } from 'framer-motion';

const trainingAreas = [
  {
    title: 'FUERZA',
    description: 'Potencia y resistencia muscular. Sin excusas.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=1200&h=1600&fit=crop&q=90',
    tag: 'POWER'
  },
  {
    title: 'COORDINACIÓN',
    description: 'Control corporal total. Precisión en cada movimiento.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=1600&fit=crop&q=90',
    tag: 'AGILITY'
  },
  {
    title: 'VELOCIDAD',
    description: 'Explosividad que marca la diferencia.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=1600&fit=crop&q=90',
    tag: 'SPEED'
  },
  {
    title: 'RESISTENCIA',
    description: 'Rendir cuando el cuerpo ya no quiere.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=1200&h=1600&fit=crop&q=90',
    tag: 'ENDURANCE'
  },
];

export function TrainingAreas() {
  return (
    <section id="training-areas" className="section-grain relative bg-surface px-4 py-24 lg:px-8">
      <div className="vignette" />
      <div className="absolute -left-8 top-1/2 h-20 w-20 rotate-12 bg-accent-green/10 blur-xl" />
      <div className="absolute -right-4 top-1/4 h-16 w-16 -rotate-6 bg-accent-orange/10 blur-lg" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-accent-orange">
            Disciplinas
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tighter text-text sm:text-5xl lg:text-6xl">
            ÁREAS DE <span className="text-accent-green">ENTRENAMIENTO</span>
          </h2>
          <motion.div 
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-accent-green via-accent-orange to-accent-yellow"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainingAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden bg-background cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
                
                <div className="absolute inset-0 bg-accent-green/0 transition-colors duration-500 group-hover:bg-accent-green/5" />

                <div className="absolute right-3 top-3">
                  <span className="bg-accent-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                    {area.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 h-px w-8 bg-accent-green transition-all duration-300 group-hover:w-full" />
                  <h3 className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-xs text-text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">
                    {area.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-yellow to-accent-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
