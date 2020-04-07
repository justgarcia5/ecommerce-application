import React from 'react'

export default function Basket(props) {
  let priceArr = props.cart.map(item => item[0].price)
  let total = priceArr.reduce((a, b) => a + b, 0).toFixed(2)

  return(
    <div>
      <h4>Shopping Cart</h4>
      <div className="cart mt-3">
        {props.cart.map((item, index) => item.map(val => {
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
          )}))
        }
        <hr/>
        {props.cart.length > 0 &&
          <div>Total: ${total}</div>
        }
        {props.cart.length < 1 &&
          <div>Cart is empty</div>
        }
      </div>
    </div>

  )
}
