import React, { useState } from 'react';
import { Search, Filter, Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'languages', label: 'Languages' },
    { id: 'tutors', label: 'Tutors' },
    { id: 'community', label: 'Community' },
    { id: 'chat', label: 'Chat with tutor' },
    { id: 'tokens', label: 'Tokens' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src="/logo/ed3hub_logo.png" alt="Ed3Hub Logo" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium transition-colors ${
                activePage === item.id ? 'text-blue-500' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search, Filter, Profile, and Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <Filter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          
          <div className="flex items-center gap-2 md:ml-4 border-l pl-2 md:pl-4 border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-8 h-8 rounded-full border border-gray-200"
            />
            <span className="hidden sm:inline text-sm font-medium text-gray-700">Jonas May</span>
            <span className="text-[10px] text-gray-400">▼</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activePage === item.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-50 flex items-center justify-around">
              <button className="flex items-center gap-2 text-gray-500 p-2">
                <Search className="w-5 h-5" />
                <span className="text-sm">Search</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 p-2">
                <Filter className="w-5 h-5" />
                <span className="text-sm">Filter</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
