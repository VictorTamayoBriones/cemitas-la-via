import { Helmet } from 'react-helmet';
import Logo from './images/logo.png';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SectionMenu from './components/Section-menu';

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={ Logo } />
      </Helmet>
      <Navbar />
      <Slider />
      <SectionMenu />
    </>
  );
}

export default App;
