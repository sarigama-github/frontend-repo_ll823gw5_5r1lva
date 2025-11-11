import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {/* Soft gradient blobs */}
      <motion.div
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: [0.35, 0.5, 0.35], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.35, scale: 1 }}
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-400/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.03, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-3xl"
      />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>
  )
}
