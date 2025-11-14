const Sponsors = () => {
  const sponsors = [
    { name: 'Emixer', logo: '/Emixer.png' },
    { name: 'Tesla', logo: '/Tesla.jfif' },
    { name: 'IBM', logo: '/IBM.png' },
    { name: 'Lenovo', logo: '/Lenovo.png' },
    { name: 'Microsoft', logo: '/Microsoft.png' },
    { name: 'Dell', logo: '/Dell.png' },
    { name: 'Telecentro', logo: '/Telecentro.png' },
    //{ name: 'Cirion Technologies', logo: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=200' },
    //{ name: 'Telecentro', logo: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  return (
    <section id="patrocinadores" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 lg:mb-8">
            Patrocinadores
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Empresas líderes que apoyan la innovación tecnológica
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 lg:p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

       {/*<div className="mt-12 lg:mt-16 text-center">
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            ¿Tu empresa quiere ser patrocinador?
          </p>
          <a
            href="#contacto"
            className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contactanos
          </a>
        </div>*/}
      </div>
    </section>
  );
};

export default Sponsors;
