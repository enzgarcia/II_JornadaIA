import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Description from './components/Description';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Description />
      <Speakers />
      <Agenda />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
