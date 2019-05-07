import React, { Component } from "react";

const Filter = (props) => {
  return (
    <div className='filter-albums'>
      <label>Search: </label>
      <input type='text' value={props.currentSearch} onChange={props.handleChange}/>
    </div>
  );
};

export default Filter;