import { Clock, MapPin } from 'lucide-react';

const Agenda = () => {
  const scheduleItems = [
    {
      time: '08:00 - 08:30',
      title: 'Acreditación y Bienvenida',
      speaker: '',
      company: '',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '08:30 - 09:00',
      title: 'Apertura Institucional',
      speaker: 'Autoridades del Ejército Argentino',
      company: '',
      location: ' Salón Belgrano - EMGE',
    },
    {
      time: '09:00 - 09:30',
      title: 'La evolución de la IA: ¿Cómo está transformando a las organizaciones?',
      speaker: 'María Isabel Villegas',
      company: 'IBM',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '09:40 - 10:10',
      title: 'La IA en Microsoft',
      speaker: 'Ing. Francisco Hernández Semblanza',
      company: 'MICROSOFT',
      location: 'Salón Belgrano - EMGE',
    },
        {
      time: '10:20 - 10:50',
      title: 'Smarter AI for All: La solución de inteligencia artificial hibrida de Lenovo',
      speaker: 'Nelson Pesce',
      company: 'LENOVO',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '10:50 - 11:00',
      title: 'Coffe break',
      speaker: '',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '11:00 - 11:30',
      title: 'Lineamientos y capacidades tecnológicas estratégicas',
      speaker: 'Martin Bonaventura',
      company: 'DELL',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '11:30 - 12:00',
      title: 'Infraestructura crítica para Inteligencia Artificial',
      speaker: 'Ing. Pablo Sanchez',
      company: 'TESLA SERVICIOS CRITICOS',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '12:00 - 13:00',
      title: 'Expositores del Ejército Argentino',
      speaker: '',
      company: '',
      location: 'Salón Belgrano - EMGE',
    },
    {
      time: '13:00 - 13:30',
      title: 'Cierre y Conclusiones',
      speaker: '',
      location: 'Salón Belgrano - EMGE',
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
                  {item.company && (
                    <p className="text-sm sm:text-base text-slate-700 mb-1">
                      {item.company}
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
