import {React, useState} from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Catalog from './components/catalog/Catalog';
import Highlights from './components/highlights/Highlights';
function App() {

  return (
    <>
      <Header />
      <Banner />
      <Catalog />
      <Highlights />
    </>
  )
}

export default App
