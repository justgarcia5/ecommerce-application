import React, { useState, useEffect} from 'react';
import './App.css';
import Product from './component/Product'
import Basket from './component/Basket'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/products').then(res => res.json())
    .then(data => {
      setProducts(data)
      setFilteredProducts(data)
    })
  }, [])

  return (
    <div className="container">
      <h1 className="text-center pt-3">E-Commerce Shoping Cart Application</h1>
      <hr />

      <div className="row">
        <div className="col-md-8">
          <Product
            products={products}
            filteredProducts={filteredProducts}
          />
        </div>
        <div className="col-md-4">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
