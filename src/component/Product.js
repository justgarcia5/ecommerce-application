import React from 'react'

export default function Product(props) {
  return(
    <div>
      <h4>Products</h4>
      <div className="row m-auto">
        {props.products.map((product) => {
          return(
            <div className="col-md-3 m-2 p-2 card" key={product.id}>
              <div className="thumbnail text-center">
                <a href="/#">
                  <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                </a>
                <p>{product.title}</p>
              </div>
              <div className="text-center">
                <b>${product.price.toFixed(2)}</b><br />
                <button className="btn btn-secondary" onClick={() => props.addProductToCart(product.id)}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}
