import './my-app.css';
import {Component} from 'react';
import {useState} from 'react';
import Counter from "./components/counter";

const MyApp = ()=>{
    const [count, setCount] = useState(0);
    const  changeCount = ()=>{
        setCount(5);
    }

    const  increaseCount = ()=>{
        setCount(count+1);
    }
    const  decreaseCount = ()=>{
        setCount(count-1);
    }
    const  resetCount = ()=>{
        setCount(0);
    }
    return (
        <div className="MyApp">
            <header>
                <h1>شمارنده من</h1>
            </header>
            <Counter />
        </div>
    );
}

export default MyApp;