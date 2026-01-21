export default function Header() {
  return (
    <header className="w-full border-b border-gray-100">
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Brand / Identity */}
        <div className="text-sm font-semibold text-gray-800">
        Private Car Service
        </div>

        {/* Navigation（极简，不抢戏） */}
        <nav className="flex items-center space-x-6 text-sm text-gray-600">
          <a
            href="/"
            className="hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="/booking"
            className="hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
