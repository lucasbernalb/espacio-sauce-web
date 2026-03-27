import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const videoSrc = "https://assets.mixkit.co/videos/50980/50980-720.mp4";

const particles = Array.from({ length: 20 });

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -30]);
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.7, 0.5]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background with scroll scale */}
      <motion.div 
        className="absolute inset-0 will-change-transform"
        style={{ scale: videoScale }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover grayscale blur-[0.5px]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      {/* Color shift overlay - subtle animated tint */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-gray-900/15 to-orange-900/20 animate-color-shift mix-blend-overlay" />
      </motion.div>

      {/* Particle layer */}
      <div className="particle-layer">
        {particles.map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      
      {/* Vignette */}
      <div className="vignette" />

      {/* Content - Centered with floating animation */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center"
        style={{ opacity: textOpacity, y: textY }}
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.3 }
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block border border-accent-green/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-green">
            Training Space
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white"
        >
          ENTRENA{' '}
          <span className="text-accent-green">COMO</span>{' '}
          COMPETÍS
        </motion.h1>

        {/* Divider */}
        <motion.div 
          className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent-orange to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-xl text-base uppercase tracking-[0.2em] text-gray-300"
        >
          Fuerza · Coordinación · Resistencia · Disciplina
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          {/* WhatsApp - Primary */}
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 rounded-xl bg-accent-green px-10 py-4 text-sm font-bold uppercase tracking-wider text-black"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </motion.a>

          {/* Instagram - Secondary */}
          <motion.a
            href="https://instagram.com/espaciosauce"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 rounded-xl border-2 border-white/40 bg-white/10 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: textOpacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-gray-400/50 p-0.5">
            <motion.div 
              className="h-full rounded-full bg-accent-green"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}