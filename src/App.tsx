import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Screen from "./Screen";

function App() {
    const maxValue = 5;
    let [count, setCount] = useState(0);
    let increment = () => {
        if(count === maxValue) {
            return
        }
        setCount(count + 1)
    };
    let reset = () => setCount(0);

    return (
        <div className="App">
            <div className="block">
                <Screen count={count}/>
                <Button increment={increment} reset={reset} count={count}/>
            </div>
        </div>
    );
}

export default App;
