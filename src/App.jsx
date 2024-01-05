import { useState } from 'react';
import './App.css';
import './component_library.css';
import Heading from './components/Heading';
import MinorHeading from './components/MinorHeading';
import Badges from './components/badges/Badges';
import Banners from './components/banners/Banners';
import Cards from './components/cards/Cards';
import Testimonials from './components/testimonials/Testimonials';

function App() {

  return (
    <>
      <Heading>My Component Library</Heading>
      <p>By: Nik Herron</p>

      <MinorHeading>Badges</MinorHeading>

      <Badges />

      <MinorHeading>Banners</MinorHeading>

      <Banners />

      <MinorHeading>Cards</MinorHeading>

      <Cards />

      <MinorHeading> Testimonials </MinorHeading>

      <Testimonials />
    </>
  )
}

export default App
