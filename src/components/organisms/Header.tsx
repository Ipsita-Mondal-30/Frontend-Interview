import { Button } from '../atoms/Button';

export function Header() {
  return (
    <header className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white uppercase">
              CA MONK
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Tools
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Practice
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Events
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Job Board
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Points
            </a>
            <Button variant="grey" size="sm" className="rounded">
              Profile
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
