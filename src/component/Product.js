import React from 'react'

export default function Product(props) {
  return(
    <div>
      <h3>Products</h3>
      <div className="row">
        {props.products.map((product, index) => {
          return(
            <div className="col-md-4 p-3"  key={index}>
              <div className="thumbnail text-center">
                <a href="/#">
                  <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                </a>
                <p>{product.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}
