import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="section-grain relative overflow-hidden bg-background px-4 py-32 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent-green/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-orange/5 blur-[100px]" />
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-accent-yellow/5 blur-[80px]" />
      </div>

      <div className="vignette" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent to-accent-green"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
            <span className="text-xs uppercase tracking-[0.4em] text-accent-green">
              Nuestra filosofía
            </span>
            <motion.div 
              className="h-px w-12 bg-gradient-to-l from-transparent to-accent-green"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 1 }}
            />
          </div>
          
          <h2 className="font-display text-4xl font-extrabold tracking-tighter text-text sm:text-5xl md:text-6xl lg:text-7xl">
            No entrenamos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-accent-orange">cuerpos</span>
              <motion.span 
                className="absolute bottom-1 left-0 h-2 w-full bg-accent-orange/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            </span>.
            <br />
            <span className="text-accent-green">Formamos atletas</span>.
          </h2>

          <motion.div 
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-accent-green via-accent-yellow to-accent-orange"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ originX: 0 }}
          />

          <p className="mx-auto mt-10 max-w-2xl text-base uppercase tracking-wide text-text-muted sm:text-lg">
            Entrenamiento funcional, adaptado a cada deporte y objetivo.
            <br />
            <span className="text-text">Sin excusas. Sin atajos.</span> Solo trabajo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {[
            { value: '500+', label: 'Atletas', accent: 'text-accent-green' },
            { value: '8', label: 'Años', accent: 'text-yellow-400' },
            { value: '4', label: 'Disciplinas', accent: 'text-accent-orange' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className={`font-display text-4xl font-extrabold sm:text-5xl ${stat.accent}`}>
                {stat.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-text-muted sm:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
