import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Products from './components/Products';
import './App.css'
import { data } from './data';


function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProducts(data);
    }, 2000);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return (
      <main className='w-full flex justify-center h-screen items-center'>
      <div>
        <Loader />
      </div>
      </main>
    );
  }
  if (products.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2 className='w-full flex justify-center h-screen items-center text-lg font-medium'>No Product Available</h2>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Products products={products}/>
    </main>
  );
}

export default App;