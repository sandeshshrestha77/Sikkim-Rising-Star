import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-white font-display font-bold text-xl hover:text-purple-400 transition-colors">
              Sikkim Rising Star
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/events" className="nav-link">Events</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/register" 
              className="button"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}