
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SectionSix from './components/SectionSix'
import './assets/css/style.css'
import './assets/css/style.css.map'
import './assets/css/rangeslider.css'
import './assets/css/aos.css'
import './assets/css/bootstrap-datepicker.css'
import './assets/css/bootstrap.min.css.map'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import About from './components/About';
import Hero from './components/Hero';
import WeOffer from './components/WeOffer';
import SpecialOffers from './components/SpecialOffers';
import Customers from './components/Customers';
import ChooseUs from './components/ChooseUs';
import OurLocation from './components/OurLocation';
/* import './assets/css/mediaelementplayer.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css' */



function App() {
  return (
    <div className="site-wrap">
     <Navbar/>
     <Hero/>
     <Section1/>
     <WeOffer/>
     <ChooseUs/>
     <SpecialOffers/> 
     <Customers/>
     <SectionSix/>
     <Footer/>
    </div>
  );
}

export default App;
