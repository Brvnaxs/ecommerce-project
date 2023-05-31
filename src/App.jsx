import {React, useState} from 'react';
import Header from './components/header/Header';
import Card from './components/product-card/Card'
import Banner from './components/banner/Banner';
import Catalog from './components/catalog/Catalog';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Catalog />
    </>
  )
}

export default App
