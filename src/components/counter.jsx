import PropTypes from 'prop-types';

const Counter = ({inc, dec, rest, count}) => {
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={rest}>💥</button>
        </div>
    )
}

Counter.propTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    rest: PropTypes.func,
    count: PropTypes.number
}

export default Counter;