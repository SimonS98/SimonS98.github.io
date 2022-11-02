import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Progqr from '../components/ProgQR';
import Slogan from '../components/Slogan';
import Description from '../components/Description';
import Description2 from '../components/Description2';
import IndexGallery from '../components/IndexGallery';
import Faq from '../components/FAQ';
import Footer from '../components/Footer';
import Team from '../components/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className="index-wrapper">
        <Slogan />
        <Progqr />
        <Description />
      </div>
      <IndexGallery />
      <div className="index-wrapper">
        <Description2 />
      </div>
      <Team />
      <div className="index-wrapper">
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
