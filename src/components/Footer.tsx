import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
          <div className="flex items-center mb-2">
            <img
              src="/Logo Jornada.png"
              alt="II Jornada de Trabajo - IA 2025"
              /* Clases para reducir el logo y añadir margen a la derecha */
              className="h-16 w-auto mr-3" 
            />
            <div>
              {/* Título principal al lado del logo */}
              <p className="text-lg sm:text-xl font-bold text-white leading-tight">
                DGCICD
              </p>
              {/* Subtítulo debajo del título */}
              <p className="text-sm sm:text-base text-slate-400 leading-none">
                Ejército Argentino
              </p>
            </div>
          </div>
            <p className="text-sm sm:text-base leading-relaxed">
              Dirección General de Comunicaciones, Informática y Ciberdefensa del Ejército Argentino. Desarrollando soluciones de inteligencia artificial para fortalecer las capacidades del Ejército Argentino. 
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 lg:mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-3 lg:space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <span>Azopardo 250, Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-blue-400" />
                <a href="tel:+54 11 4346-6100" className="hover:text-white transition-colors">
                  +54 11 4346-6100
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-blue-400" />
                <a href="mailto:info@ejercito.mil.ar" className="hover:text-white transition-colors">
                  dirinfo@ejercito.mil.ar
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 lg:mb-6">
              Organiza
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Dirección General de Comunicaciones, Informática y Ciberdefensa
              <br />
              Ejército Argentino
            </p>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <Globe size={20} className="flex-shrink-0 text-blue-400" />
              <a
                href="https://portal.ejercito.mil.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Portal Ejército
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>
            © 2025 Ejército Argentino - Todos los derechos reservados
          </p>
          <p className="mt-2">
            II Jornada de Trabajo - Inteligencia Artificial 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
