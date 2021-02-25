import React from "react";

const FilterSection = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <h5>Select fectch record limit</h5>
          <select
            value={props.limit}
            onChange={(e) => {
              props.setLimit(e.target.value);
            }}
            name="form-control"
            className="form-control"
          >
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FilterSection;
