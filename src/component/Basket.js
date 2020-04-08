import React from 'react'

export default function Basket(props) {
  let priceArr = props.cart.map(item => item[0].price)
  let total = priceArr.reduce((a, b) => a + b, 0).toFixed(2)

  return(
    <div>
      <h3 className="pb-3 text-center">Shopping Cart</h3>
      <div>
        {props.cart.length > 0 &&
          <p>You have {props.cart.length} items in your cart</p>
        }
        {props.cart.map((item, index) => item.map(val => {
          return(
            <div key={index} className="cart-item">
              <div className="row">
                <div className="col-md-2">
                  <a href="/#">
                    <img className="" src={`/products/${val.sku}_2.jpg`} alt={val.title}/>
                  </a>
                </div>
                <div className="col-md-8">
                  <p className="p-0">{val.title}</p><br/>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger" onClick={() => props.removed(val.id, val.price)}>Remove</button>
                </div>
              </div>
              <div className="row pl-5">
                <div className="col-md-6">
                <p className="">Quantity: {props.quantity}</p>
                </div>
                <div className="col-md-6">
                  <p className="">${`${val.price.toFixed(2)}`}</p>
                </div>
              </div>
              <hr />
            </div>
          )}))
        }
        {props.cart.length > 0 &&
          <div className="text-right">Total: ${total}</div>
        }
        {props.cart.length < 1 &&
          <div className="text-center">Cart is empty</div>
        }
      </div>
    </div>

  )
}
