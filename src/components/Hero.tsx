import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1600&fit=crop&q=90',
  'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&h=1600&fit=crop&q=90',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&h=1600&fit=crop&q=90',
  'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&h=1600&fit=crop&q=90',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=1600&fit=crop&q=90',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&h=1600&fit=crop&q=90',
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToTraining = () => {
    document.getElementById('training-areas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="section-grain relative h-screen w-full overflow-hidden">
      <motion.div 
        className="absolute inset-0 grid grid-cols-3 gap-0.5 will-change-transform"
        style={{ y, scale }}
      >
        {backgroundImages.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden will-change-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={src}
              alt=""
              className="h-screen w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/90" />
      <div className="vignette" />

      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-start justify-center pl-[8%] pr-[12%] text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block border border-accent-green/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent-green">
            Training Space
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg"
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
          className="mt-8 max-w-xl text-base uppercase tracking-widest text-gray-300 sm:text-lg drop-shadow-lg"
        >
          Fuerza. Coordinación. Resistencia. Disciplina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <motion.button
            onClick={scrollToTraining}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-xl bg-accent-green px-10 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-accent-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-green/50"
          >
            <span className="relative z-10">Ver entrenamientos</span>
            <motion.div
              className="absolute inset-0 bg-accent-yellow"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-gray-400/50 p-0.5">
            <div className="h-full rounded-full bg-accent-green" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
