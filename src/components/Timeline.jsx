export default function Timeline({ items = [] }) {
  return (
    <ol className="relative border-l border-neutral-200 pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-10 ml-2">
          <span className="absolute -left-2 mt-1 h-3 w-3 rounded-full border-2 border-white bg-indigo-500 shadow" />
          <h4 className="text-base font-semibold text-neutral-900">{it.title}</h4>
          {it.subtitle && (
            <p className="text-sm text-neutral-600 mt-0.5">{it.subtitle}</p>
          )}
          {it.content && (
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">{it.content}</p>
          )}
        </li>
      ))}
    </ol>
  )
}
