import './my-app.css';
import {Component} from 'react';
import Counter from "./components/counter";

// const MyApp = ()=>{
//     return (
//         <div className="MyApp">
//             <h3>شمارنده من</h3>
//             <br/>
//             <Counter />
//         </div>
//     );
// }

class MyApp extends Component{
    render() {
        return (
            <div className="MyApp">
                <h3>شمارنده من</h3>
                <Counter count={5}/>
                <Counter />
            </div>
        );
    }
}

export default MyApp;