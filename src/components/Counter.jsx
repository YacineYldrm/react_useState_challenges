import { useState } from "react";
import './Counter.scss'

const Counter = () => {

    const [count, setCount] = useState(0);

    const minusOne = () =>
    {
        if(count > 0)
        {
            setCount(count - 1);
        }
    }

    return ( 
        <section className="counter_wrapper">
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={minusOne}>-</button>
            </div>
        </section>
    );
}

export default Counter;