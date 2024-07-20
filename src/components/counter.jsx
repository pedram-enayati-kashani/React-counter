import {Component} from 'react'

// const Counter = ({count})=>{
//     return (
//         <div className="Counter">
//             <p>شمارنده : {count || 90}</p>
//         </div>
//     );
// }

class Counter extends Component{

    static defaultProps = {
        count: 150
    }

    render() {
        const {count} = this.props;
        return (
            <div>
                <p>شمارنده : {count}</p>
            </div>
        )
    }
}


// Counter.defaultProps = {
//     count : 5,
// }

export default Counter;