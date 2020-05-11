import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Basket(props) {
  const total = props.cart.reduce((a, b) => a + b.price * b.count, 0);
  // const totalInt = parseInt(total);
  const taxed = total.toFixed(2) * .075;
  // const taxedInt = parseInt(taxed);
  const sum = taxed + total;

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
        {props.cart.length > 0 &&
          <p>You have {props.cart.length} items in your cart</p>
        }
        {props.cart.map((item) => {
            console.log(item.price)

          return(
            <div key={item.id} className="cart-item">
              <div className="row">
                <div className="col-sm">
                  <Link to={`product/${item.id}`}>
                    <img className="ml-4" src={`/products/${parseInt(item.sku)}_2.jpg`} alt={item.title}/>
                  </Link>
                </div>
                <div className="col-sm">
                  <p className="p-0">{item.title}</p><br/>
                </div>
                <div className="col-sm">
                  <button className="btn btn-danger" onClick={() => props.removed(item.id)}>Remove</button>
                </div>
              </div>
              <div className="row pl-5">
                <div className="col-sm-8 d-flex">
                  <input className="form-control" style={styles.input} type="number" pattern="[0-9]*" name={item.title} value={item.count} onChange={onChange}/>
                  <p className="p-2"> x {item.price.toFixed(2)}</p>
                </div>
                <div className="col-sm-4 p-2">
                  {(item.count * item.price).toFixed(2)}
                </div>
              </div>
              <hr />
            </div>
          )})
        }
        {props.cart.length > 0 &&
        <div>
          <div className="text-right pr-1">Tax: {taxed.toFixed(2)}</div>
          <div className="text-right pr-1">Total: {sum.toFixed(2)}</div>
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
    width: 65,
    margin: 0,
  }
}
