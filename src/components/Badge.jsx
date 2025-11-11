export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur ${className}`}>
      {children}
    </span>
  )
}
