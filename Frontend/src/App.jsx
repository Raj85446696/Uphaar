import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/HomePage/Main';
import Products from './components/Products/Products';
import ProductsDetails from './components/ProductDetails/ProductsDetails';
import Cart from './components/Carts/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products/:category/:id" element={<ProductsDetails />} />
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
  );
}

export default App;
