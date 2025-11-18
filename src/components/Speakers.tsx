import { Linkedin } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'María Isabel Villegas',
      role: 'Data & AI Digital Sales Specialist',
      organization: 'IBM',
      image: '/VillegasIBM.png',
      linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-isabel-villegas-22884551/',
    },
    {
      name: 'Martin Bonaventura',
      role: 'Advisory Channels Data Center Specialist',
      organization: 'Dell Technologies',
      image: '/MartinDELL.png',
      linkedin: 'https://www.linkedin.com/in/martin-bonaventura-89a569a/',
    },
    {
      name: 'Ing. Pablo Sanchez',
      role: 'Gerente de operaciones',
      organization: 'Tesla Servicios Criticos',
      image: '/DirTesla.jpg',
      linkedin: '#',
    },
    ,
    {
      name: 'Ing. Guillermo Márquez',
      role: 'Especialista en soluciones Microsoft',
      organization: 'Microsoft',
      image: '/RepMicrosoft1.png',
      linkedin: '#',
    },
        ,
    {
      name: 'Nelson Pesce',
      role: 'Product Category Director',
      organization: 'Lenovo',
      image: '/NelsonLenovo.png',
      linkedin: 'https://www.linkedin.com/in/npesce/',
    },
  ];

  return (
    <section id="speakers" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 lg:mb-8">
            Speakers
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Líderes y expertos en inteligencia artificial compartirán sus experiencias y conocimientos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm lg:text-base text-blue-700 font-semibold mb-1">
                  {speaker.role}
                </p>
                <p className="text-sm text-slate-600 mb-4">{speaker.organization}</p>
                <div className="flex gap-3">
                  <a
                    href={speaker.linkedin}
                    className="text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={speaker.twitter}
                    className="text-slate-600 hover:text-blue-700 transition-colors"
                  >
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
