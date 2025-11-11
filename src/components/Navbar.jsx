import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#vision" },
    { label: "Mission", href: "#mission" },
    { label: "Experience", href: "#experience" },
    { label: "Goals", href: "#goals" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-white/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">
              Kawiswara #26524
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 dark:text-neutral-200">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col rounded-lg border border-white/10 bg-white/60 dark:bg-neutral-900/60 overflow-hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/70"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
