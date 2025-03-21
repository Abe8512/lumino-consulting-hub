
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between container-padding">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold text-lumino-800 transition-all duration-300",
            isScrolled ? "text-lumino-800" : "text-lumino-800"
          )}>
            Lumino<span className="text-lumino-500">Strategies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                isScrolled 
                  ? "text-gray-700 hover:text-lumino-600 hover:bg-gray-100/50" 
                  : "text-gray-800 hover:text-lumino-600 hover:bg-white/30"
              )}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact">
            <Button 
              className="ml-2 bg-lumino-600 hover:bg-lumino-700 text-white transition-all duration-200 shadow-sm">
              Get Started
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-6 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:text-lumino-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button 
              className="mt-2 bg-lumino-600 hover:bg-lumino-700 text-white w-full justify-center"
            >
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
