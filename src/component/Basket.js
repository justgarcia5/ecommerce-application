import React from 'react'

export default function Basket(props) {
  let priceArr = props.cart.map(item => item[0].price)
  let total = priceArr.reduce((a, b) => a + b, 0).toFixed(2)

  return(
    <div className="cart">
      <h4 className="text-center">Shopping Cart</h4>
      {
        props.cart.map((item, index) => item.map(val => {
          return(
            <div key={index} className="d-flex cart-item m-2 p-2 justify-content-space-between">
              <a href="/#">
                <img className="" src={`/products/${val.sku}_2.jpg`} alt={val.title}/>
              </a>
              <div>
                <p className="p-0">{val.title}</p><br/>

                <b className="">${val.price.toFixed(2)}</b>

              </div>
              <button onClick={() => props.removed(val.id, val.price)}>X</button>
            </div>
          )
        })
      )}
      Total: ${total}
    </div>
  )
}
