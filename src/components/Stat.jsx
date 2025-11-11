export default function Stat({ value, label }) {
  return (
    <div className="group rounded-2xl border border-neutral-200/70 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="text-3xl font-extrabold tracking-tight text-neutral-900">{value}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </div>
  )
}
