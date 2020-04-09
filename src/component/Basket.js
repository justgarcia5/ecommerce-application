import React from 'react';

export default function Basket(props) {
  const total = props.cart.reduce((a, b) => a + b.price * b.count, 0).toFixed(2);
//
  const onChange = (e) => {
    props.cart.map(item => {
      if(e.target.name === item.title) {
        item.count = e.target.value;
        props.setCart(prevProps => [...prevProps]);
      }
    })
  }

  return(
    <div>
      <h3 className="pb-3 text-center">Shopping Cart</h3>
      <div>
        {props.cart.length >= 0 &&
          <p>You have {props.cart.length} items in your cart</p>
        }
        {props.cart.map((item) => {
          return(
            <div key={item.id} className="cart-item">
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
                  <button className="btn btn-danger" onClick={() => props.removed(item.id)}>Remove</button>
                </div>
              </div>
              <div className="row pl-5">
                <div className="col-md-8 d-flex">
                  <input className="form-control" style={styles.input} name={item.title} width={10} value={item.count} onChange={onChange}/>
                  <p className="p-2"> x ${item.price.toFixed(2)}</p>
                </div>
                <div className="col-md-4 p-2">
                  ${(item.count * item.price).toFixed(2)}
                </div>
              </div>
              <hr />
            </div>
          )})
        }
        {props.cart.length > 0 &&
        <div>
          <div className="text-right pr-1">Total: ${total}</div>
          <button className="btn btn-primary float-right mt-2" onClick={() => alert("Ready to checkout!")}>Checkout</button>
        </div>
        }
        {props.cart.length <= 0 &&
          <div className="text-center">Cart is empty</div>
        }
      </div>
    </div>
  )
}

const styles = {
  input: {
    width: 45,
    margin: 0,
  }
}
