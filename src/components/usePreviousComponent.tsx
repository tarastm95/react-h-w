import { useState, useEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

const UsePreviousComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);

    useEffect(() => {
        console.log(`Попереднє значення: ${previousCount}`);
    }, [count, previousCount]);

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default UsePreviousComponent;
