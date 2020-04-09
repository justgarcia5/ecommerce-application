import React from 'react';

export default function Basket(props) {

  let product = props.cart.map(item => item.count)
  let cartItems = product.reduce((a, b) => a + b, 0)

  return(
    <div>
      <h3 className="pb-3 text-center">Shopping Cart</h3>
      <div>
        {props.cart.length > 0 &&
          <p>You have {cartItems} items in your cart</p>
        }
        {props.cart.map((item, index) => {
          return(
            <div key={index} className="cart-item">
              <div className="row">
                <div className="col-md-2">
                  <a href="/#">
                    <img className="" src={`/products/${item.sku}_2.jpg`} alt={item.title}/>
                  </a>
                </div>
                <div className="col-md-8">
                  <p className="p-0">{item.title}</p><br/>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger" onClick={() => props.removed(item.id, item.price)}>Remove</button>
                </div>
              </div>
              <div className="row pl-5">
                <div className="col-md-8">
                <p className="">Quantity: {item.count} x ${item.price.toFixed(2)}</p>
                </div>
                <div className="col-md-4">
                  ${(item.count * item.price).toFixed(2)}
                </div>
              </div>
              <hr />
            </div>
          )})
        }
        {/* {props.cart.length > 0 &&

          <div className="text-right">Total: ${total}</div>
        } */}
        {props.cart.length < 1 &&
          <div className="text-center">Cart is empty</div>
        }
      </div>
    </div>

  )
}
