import { Clock, MapPin } from 'lucide-react';

const Agenda = () => {
  const scheduleItems = [
    {
      time: '08:00 - 08:30',
      title: 'Acreditación y Bienvenida',
      speaker: '',
      location: 'Salón Belgrano',
    },
    {
      time: '08:30 - 09:00',
      title: 'Apertura Institucional',
      speaker: 'Autoridades del Ejército Argentino',
      location: ' Salón Belgrano',
    },
    {
      time: '09:00 - 10:00',
      title: 'IA en la Transformación Digital del Sector Defensa',
      speaker: 'Dr. Juan Carlos Rodríguez',
      location: 'Salón Belgrano',
    },
    {
      time: '10:00 - 10:30',
      title: 'Coffee Break',
      speaker: '',
      location: 'Salón Belgrano',
    },
    {
      time: '10:30 - 11:30',
      title: 'Machine Learning Aplicado: Casos de Éxito',
      speaker: 'Ing. María Fernández',
      location: 'Salón Belgrano',
    },
    {
      time: '11:30 - 12:30',
      title: 'IA y Ciberseguridad: Desafíos y Oportunidades',
      speaker: 'Dra. Ana Martínez',
      location: 'Salón Belgrano',
    },
    {
      time: '12:30 - 14:00',
      title: 'Almuerzo',
      speaker: '',
      location: 'Comedor',
    },
    {
      time: '14:00 - 15:00',
      title: 'Implementación de IA en Organizaciones',
      speaker: 'Lic. Roberto Gómez',
      location: 'Salón Belgrano',
    },
    {
      time: '15:00 - 16:00',
      title: 'Panel de Debate: El Futuro de la IA',
      speaker: 'Todos los Speakers',
      location: 'Salón Belgrano',
    },
    {
      time: '16:00 - 16:30',
      title: 'Cierre y Conclusiones',
      speaker: 'Autoridades del Ejército Argentino',
      location: 'Salón Belgrano',
    },
  ];

  return (
    <section id="agenda" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 lg:mb-8">
            Agenda
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Programa completo del evento - 18 de noviembre de 2025
          </p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-base sm:text-lg">
                    <Clock size={20} className="flex-shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="text-sm sm:text-base text-slate-700 mb-1">
                      {item.speaker}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
