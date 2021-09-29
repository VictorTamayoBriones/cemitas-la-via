import { Helmet } from 'react-helmet';
import Logo from './images/logo.png';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SectionMenu from './components/Section-menu';
import BannerAboutMenu from './components/Banner-about-menu';
import SectionContacto from './components/Section-contacto';
import GoogleMaps from './elementos/Googlemaps';
import Horario from './components/SectionHorario';

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={ Logo } />
      </Helmet>
      <Navbar />
      <Slider />
      <SectionMenu />
      <BannerAboutMenu />
      <SectionContacto />
      <GoogleMaps />
      <Horario />
    </>
  );
}

export default App;
