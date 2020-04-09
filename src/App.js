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

  useEffect(() => {
    fetch('http://localhost:8000/products').then(res => res.json())
    .then(data => {
      setProducts(data);
      setFilteredProducts(data)
    })
    if(localStorage.getItem('cart')) {
      setCart(() => JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  const addProductToCart = (id, product) => {
    let productAlreadyInCart = false;
    cart.forEach(item => {
      if(item.id === product.id) {
        productAlreadyInCart = true;
        item.count++
        setCart(prevProps => [...prevProps]);
      }
    })
    if(!productAlreadyInCart) {
      setCart(prevProps => [...prevProps, {...product, count: 1}]);
    }
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const removeProductFromCart = (id) => {
    const items = cart.filter(item => item.id !== id)
    localStorage.setItem('cart', items)
    setCart(items)

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
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
