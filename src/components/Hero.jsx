import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import Badge from './Badge'
import Stat from './Stat'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28">
      <AnimatedBackground />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge>FIRST Tech Challenge • Indonesia</Badge>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Kawiswara #26524
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              We are a youth robotics team from Yogyakarta, Indonesia. Our passion for STEM and robotics drives us to design, build, and program advanced robots while living the spirit of Gracious Professionalism.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">Learn more</a>
              <a href="#goals" className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100">Our goals</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="10" label="Team members" />
              <Stat value="24/25" label="Rookie season" />
              <Stat value="#26524" label="Team ID" />
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop"
                  alt="Robot showcase placeholder"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.25))]" />
              </div>
            </motion.div>
            <p className="mt-3 text-xs text-neutral-500">Replace with team photo or robot render.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
