import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Likes: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Decr</button>
        </div>
    );
};

export default Counter;