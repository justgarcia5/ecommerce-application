import React from 'react';

export default function Filter(props) {
  return(
    <div className="row pt-3 pb-3">
      <h4 className="col-md-4 pt-3 pl-4">
        {props.count} products found
      </h4>
      <div className="col-md-4">
        <label>
          Order by:
        </label>
        <select className="form-control" value={props.sort} onChange={props.handleChangeSort}>
          <option value="">Select</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </div>
      <div className="col-md-4">
        <label>
          Filter size:
        </label>
        <select className="form-control" value={props.sort} onChange={props.handleChangeSort}>
          <option value="">Select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  )
}
