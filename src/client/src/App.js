import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/Footer/Footer';


const App= ()=>{

  return(
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>} />
        <Route path='/womens' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kid"/>} />

        <Route path='/products' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>

      <Footer/>

      </BrowserRouter>
    </div>
  );
};

export default App;