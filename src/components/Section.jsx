export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
          )}
        </div>
        <div className="prose prose-neutral max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
