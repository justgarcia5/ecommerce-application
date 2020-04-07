import React from 'react'

export default function Basket(props) {
  let priceArr = props.cart.map(item => item[0].price)
  let total = priceArr.reduce((a, b) => a + b, 0).toFixed(2)

  return(
    <div>
      <h4>Shopping Cart</h4>
      <div className="cart mt-3">
        {props.cart.length > 0 &&
          <div>You have {props.cart.length} items in your cart</div>
        }
        {props.cart.map((item, index) => item.map(val => {
          return(
            <div key={index} className="cart-item m-2 justify-content-space-between">
              <div className="row">
                <div className="col-md-3">
                  <a href="/#">
                    <img className="" src={`/products/${val.sku}_2.jpg`} alt={val.title}/>
                  </a>
                </div>
                <div className="col-md-6">
                  <p className="p-0">{val.title}</p><br/>
                </div>
                <div className="col-md-3 pl-2">
                  <button className="btn btn-secondary" onClick={() => props.removed(val.id, val.price)}>Remove</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <p className="">Quantity: </p>
                </div>
                <div className="col-md-4">
                  <p className="">${val.price.toFixed(2)}</p>
                </div>

              </div>


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
