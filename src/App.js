import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './component/Product';
import Basket from './component/Basket';
import Filter from './component/Filter'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState('')
  // const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8000/products').then(res => res.json())
    .then(data => {
      setProducts(data);
      setFilteredProducts(data)
    })
  }, [])

  const addProductToCart = (id, product) => {
    let productAlreadyInCart = false;
    cart.forEach(item => {
      if(item[0].id === product.id) {
        productAlreadyInCart = true;
        // setQuantity(quantity+1)
      }
    })
    if(!productAlreadyInCart) {
      let filteredProduct = products.filter(product => product.id === id);
      setCart(prevProps => [...prevProps, filteredProduct]);
      // setQuantity(1)
    }
  }

  const removeProductFromCart = (id) => {
    let removed = cart.filter(item => item[0].id !== id)
    setCart(() => removed.length > 0 ? removed : [] )
  }

  const handleChangeSort = (e) => {
    let sort = e.target.value
    setSort(sort)
    listProducts(sort)
  }

  const listProducts = (sort) => {
    setFilteredProducts(() => {
      if(sort === 'lowest') {
        return products.sort((a, b) => a.price > b.price ? 1 : -1)
      } else if(sort === 'highest') {
        return products.sort((a, b) => a.price < b.price ? 1 : -1)
      } else if (sort !== '') {
        return products.filter((product) => product.availableSizes.indexOf(sort) >= 0)
      } else {
        return products.sort((a, b) => a.id > b.id ? 1 : -1)
      }
    })
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center pt-3">E-Commerce Shopping Cart Application</h1>
        <hr />
        <Filter
          sort={sort}
          handleChangeSort={handleChangeSort}
          count={filteredProducts.length}
        />
        <hr />
        <div className="row m-auto">
          <div className="col-md-8">
            <Product
            filteredProducts={filteredProducts}
              products={products}
              addProductToCart={addProductToCart}
              sort={sort}
            />
          </div>
          <div className="col-md-4">
            <Basket
              cart={cart}
              removed={removeProductFromCart}
              // quantity={quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
