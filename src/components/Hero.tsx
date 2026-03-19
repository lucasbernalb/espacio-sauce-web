import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=800&fit=crop&q=80',
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const scrollToTraining = () => {
    document.getElementById('training-areas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 grid grid-cols-3 gap-0.5"
        style={{ y, scale }}
      >
        {backgroundImages.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: i * 0.15 }}
          >
            <motion.img
              src={src}
              alt=""
              className="h-screen w-full object-cover"
              style={{ scale }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="vignette" />

      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block border border-accent-green/50 px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent-green">
            Training Space
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl font-extrabold tracking-tighter text-text sm:text-6xl md:text-7xl lg:text-8xl"
        >
          ENTRANÁ{' '}
          <span className="relative">
            <span className="relative z-10 text-accent-green">COMO</span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-3 w-full bg-accent-green/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ originX: 0 }}
            />
          </span>{' '}
          COMPETÍS
        </motion.h1>

        <motion.div 
          className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-accent-orange to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-xl text-base uppercase tracking-widest text-text-muted sm:text-lg"
        >
          Fuerza. Coordinación. Resistencia. Disciplina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <button
            onClick={scrollToTraining}
            className="group relative overflow-hidden bg-accent-green px-10 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all duration-300 hover:bg-accent-green/90"
          >
            <span className="relative z-10">Ver entrenamientos</span>
            <motion.div
              className="absolute inset-0 bg-accent-yellow"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-text-muted/50 p-0.5">
            <div className="h-full rounded-full bg-accent-green" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
