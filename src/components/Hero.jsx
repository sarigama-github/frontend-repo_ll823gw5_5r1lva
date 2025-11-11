export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              FIRST Tech Challenge • Indonesia
            </p>
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
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-white shadow-xl" />
            </div>
            <p className="mt-3 text-xs text-neutral-500">Imagery placeholder — replace with team photo or robot render.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
