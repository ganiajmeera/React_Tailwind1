import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection';
import Content from '../components/Content';
import GallerySection from '../components/GallerySection';
import HoverSection from '../components/HoverSection';
import Feature from '../components/Feature';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Prizing from '../components/Prizing';


function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection/>
      <Content/>
      <GallerySection/>
      <HoverSection/>
      <Feature/>
      <Prizing/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default LandingPage;
