// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import CategoryProductsPage from './components/CategoryPage/CategoryProductsPage';
import Products from './components/products/Products';
import ProductDetailsPage from './components/ProductDetailsPage';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/category/:categoryId" element={<CategoryProductsPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
