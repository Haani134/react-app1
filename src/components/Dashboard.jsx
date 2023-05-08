import React,{useState} from 'react';
const Dashboard = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevState) => {
            return prevState+1
        })
    }
    const handleDecrement = () =>
    {
        setCount((prevState) => prevState-1)
    }
    return <div>
        <h1>Counts</h1>
        <p>{count}</p>
        <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
    
}


export default  Dashboard