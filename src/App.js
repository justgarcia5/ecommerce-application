import React, { useState, useEffect} from 'react';
import './App.css';
import Product from './component/Product';
import Basket from './component/Basket';
import Filter from './component/Filter'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/products').then(res => res.json())
    .then(data => {
      setProducts(data);
      setFilteredProducts(data);
    })
  }, [])

  const addProductToCart = (id) => {
    let filteredProduct = products.filter(product => product.id === id);
    setCart(prevProps => [...prevProps, filteredProduct]);
  }

  const removeProductFromCart = (id) => {
    let removed = cart.filter(item => item[0].id !== id)
    setCart(() => removed.length > 0 ? removed : [] )
  }

  const handleChangeSort = (e) => {
    setSort(e.target.value)
    listProducts(e.target.value)
  }

  const listProducts = (sort) => {
    setFilteredProducts(() => {
      if(sort === 'lowest') {
        products.sort((a, b) => a.price > b.price ? 1 : -1)
      } else if(sort === 'highest') {
        products.sort((a, b) => a.price < b.price ? 1 : -1)
      } else {
        products.sort((a, b) => a.id > b.id ? 1 : -1)
      }
    })
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center pt-3">E-Commerce Shopping Cart Application</h1>
        <hr />
        <Filter
          // size={size}
          sort={sort}
          // handleChangeSize={handleChangeSize}
          handleChangeSort={handleChangeSort}
          count={products.length}
        />
        <hr />
        <div className="row m-auto">
          <div className="col-md-8">
            <Product
              products={products}
              filteredProducts={filteredProducts}
              addProductToCart={addProductToCart}
              sort={sort}
            />
          </div>
          <div className="col-md-4">
            <Basket
              cart={cart}
              removed={removeProductFromCart}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
