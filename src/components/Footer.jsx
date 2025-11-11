export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Kawiswara #26524. All rights reserved.</p>
        <div className="text-sm text-neutral-500">Built with passion for robotics and learning.</div>
      </div>
    </footer>
  );
}
