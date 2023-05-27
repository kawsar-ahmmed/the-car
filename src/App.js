import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ServiceDetail from './component/ServiceDetail/ServiceDetail';


export const CarContext = createContext();

function App() {
  const [cars, setCar] = useState(CarContext); // Initialize the car state with null or any default valueconsole.log(car)
  console.log(cars)
  return (
    <CarContext.Provider value={[cars, setCar]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cars/:carsId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </CarContext.Provider>
  );
}

export default App;
