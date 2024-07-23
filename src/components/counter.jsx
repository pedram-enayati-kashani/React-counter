import {Component} from 'react'
import PropTypes, {number} from "prop-types";

const Counter = ({inc,dec,reset,count}) =>{
    return (
        <div>
            <p>{count}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

Counter.prototype = {
  inc: PropTypes.func,
  dec: PropTypes.func,
  reset: PropTypes.func,
  count: PropTypes.number,
};

export default Counter;