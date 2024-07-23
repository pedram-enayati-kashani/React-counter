import {useState} from 'react';

import Counter from "./components/counter";
//React Hook

import './my-app.css';

const MyApp = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="MyApp">
            <header>
                <h1>شمارنده من</h1>
            </header>
            <Counter inc={increaseCount} dec={decreaseCount} rest={resetCount} count={count}/>
        </div>
    )
}

export default MyApp;