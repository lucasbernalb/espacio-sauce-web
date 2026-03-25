import { motion } from 'framer-motion';

const gridImages = [
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&fit=crop&q=90', alt: 'Street workout' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&fit=crop&q=90', alt: 'Functional training' },
  { src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&fit=crop&q=90', alt: 'Outdoor training' },
  { src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1200&fit=crop&q=90', alt: 'Athlete in action' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&fit=crop&q=90', alt: 'Calisthenics' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&fit=crop&q=90', alt: 'Training session' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&fit=crop&q=90', alt: 'Weight training' },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&fit=crop&q=90', alt: 'Gym equipment' },
];

export function InstagramGrid() {
  return (
    <section className="section-grain relative bg-background px-4 py-24 lg:px-8">
      <div className="vignette" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-accent-green">
            El espacio
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tighter text-text sm:text-5xl lg:text-6xl">
            NUESTRO <span className="text-accent-green">ESPACIO</span>
          </h2>
          <motion.div 
            className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent-green to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gridImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.05,
                filter: { duration: 0.4 }
              }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-background/80 p-3 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="mb-2 h-0.5 w-0 bg-accent-green transition-all duration-500 ease-out group-hover:w-12" />
                <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/90">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 border border-border px-8 py-3 text-sm font-semibold uppercase tracking-wider text-text-muted transition-colors duration-300 hover:border-accent-green hover:text-accent-green"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguinos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
