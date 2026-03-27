import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="section-grain relative overflow-hidden bg-background px-4 py-20 lg:py-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-green/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent-orange/5 blur-[80px]" />
      </div>

      <div className="vignette" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-accent-green to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ originX: 0 }}
          />
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text leading-tight">
            NO ENTRENAMOS{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-accent-orange">CUERPOS</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-2 w-full bg-accent-orange/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ originX: 0 }}
              />
            </span>.
            <br />
            <span className="text-accent-green">FORMAMOS ATLETAS</span>.
          </h2>

          <motion.div 
            className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-accent-green via-accent-yellow to-accent-orange"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ originX: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}