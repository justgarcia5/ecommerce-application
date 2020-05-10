import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

const ProductView = props => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products').then(res => res.json())
    .then(data => {
      let filteredProduct = data.filter(product => product.id === parseInt(props.match.params.id))
      setProduct(filteredProduct);
    })
  }, [])

  console.log(props.location.productProps)
  return (
    <div className="container">
      {product.map(product => {
        return(
            <div className="row" key={product.id}>
              <div className="col-sm pt-5 mr-5 mt-5 text-right">
                <img src={`/products/${parseInt(product.sku)}_1.jpg`} alt={product.title}/>
              </div>
              <div className="col-sm p-5 mt-5 text-left">
                <h1>{product.title}</h1>
                <hr/>
                <p className="mt-5">Description: {product.description}</p><br />
                <p>Sizes: {`${product.availablesizes} `}</p><br />
                <p className=""><b>${product.price}</b></p><br />
                {product.isfreeshipping &&
                  <p>Free shipping included!</p>
                }
                <button className="btn btn-success mr-3 mt-5" onClick={() => props.location.productProps.addProduct(product.id, product)}>Add to cart</button>
                <Link className="btn btn-secondary ml-3 mt-5" to="/">Back</Link>
              </div>
            </div>
        )
      })}
    </div>
  )
}

export default ProductView;
