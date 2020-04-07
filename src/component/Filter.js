import React from 'react';

export default function Filter(props) {
  return(
    <div className="row pt-3 pb-3">
      <div className="col-md-4">
        {props.count} products found
      </div>
      <div className="col-md-4">
        <label>
          <p>Order by:</p>
          <select className="form-control" value={props.sort} onChange={props.handleChangeSort}>
            <option value="">Select</option>
            <option value="lowest">Lowest to Highest</option>
            <option value="highest">Highest to Lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
      </div>
    </div>
  )
}
