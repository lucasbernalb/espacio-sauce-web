import { motion } from 'framer-motion';

const gridImages = [
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop&q=80',
    alt: 'Street workout',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]'
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&q=80',
    alt: 'Functional training',
    span: 'col-span-1 row-span-2',
    aspect: 'aspect-[3/4]'
  },
  {
    src: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&h=600&fit=crop&q=80',
    alt: 'Outdoor training',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]'
  },
  {
    src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&h=600&fit=crop&q=80',
    alt: 'Athlete in action',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]'
  },
  {
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop&q=80',
    alt: 'Calisthenics',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[4/3]'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&q=80',
    alt: 'Training session',
    span: 'col-span-1 row-span-2',
    aspect: 'aspect-[3/4]'
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80',
    alt: 'Weight training',
    span: 'col-span-2 row-span-1',
    aspect: 'aspect-[16/9]'
  },
];

export function InstagramGrid() {
  return (
    <section className="section-grain bg-background px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
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
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {gridImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`group relative overflow-hidden bg-surface-elevated ${image.span}`}
            >
              <div className={image.aspect}>
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover grayscale transition-all duration-700"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-0 bg-accent-green/0 transition-colors duration-500 group-hover:bg-accent-green/15" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-background/90 p-4 backdrop-blur-sm">
                  <svg className="h-7 w-7 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-2 left-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-3 border border-border px-8 py-3 text-sm font-semibold uppercase tracking-wider text-text-muted transition-all duration-300 hover:border-accent-green hover:text-accent-green"
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
