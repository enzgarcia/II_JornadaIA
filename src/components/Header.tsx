import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navItems = [];
  /*OCULTE TODO ESTO
  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Información', href: '#informacion' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Patrocinadores', href: '#patrocinadores' },
    { label: 'Contacto', href: '#contacto' },
  ]; */

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800 shadow-lg' : 'bg-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="/LogoEA.png"
              alt="Logo Ejército Argentino"
              className="h-10 lg:h-14 w-auto"
            />
          </div>
{/* 3. espacio en centro */}
          <div className="flex-grow"></div> 
{/* 3. LOGO DERECHA */}
          <div className="flex-shrink-0">
            <img
              src="/LogoDir.png"
              alt="Logo DGCICD"
              className="h-12 lg:h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
{/*PARA OCULTAR
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          */}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 text-base text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
