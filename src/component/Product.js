import React from 'react'

export default function Product(props) {
  return(
    <div>
      <h2>Products</h2>
      {props.products.map((product, index) => {
        return(
          <div key={index}>
            <li>{product.title}</li>
          </div>
        )
      })}
    </div>
  )
}
