import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
  const products = props.filteredProducts.length <= 1 ? props.products : props.filteredProducts
  return(
    <div>
      <h3 className="pb-3">Products</h3>
      <div className="row m-auto pb-5">
        {products.map((product) => {
          return(
            <div className="col-md-4 pt-2 pb-2 card" key={product.id}>
              <div className="thumbnail text-center">
                <a href="/#">
                  <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                </a>
                <p>{product.title}</p>
                Sizes: {`${product.availableSizes} `}
              </div>
              <div className="text-center">
                <b>${product.price.toFixed(2)}</b><br />
                <button className="btn btn-success mt-2" onClick={() => props.addProductToCart(product.id, product)}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}
