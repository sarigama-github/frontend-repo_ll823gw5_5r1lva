import { motion } from 'framer-motion'

export default function Showcase({ images = [] }) {
  if (!images.length) return null
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-50">
            <img src={src} alt="Showcase" className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
        </motion.div>
      ))}
    </div>
  )
}
