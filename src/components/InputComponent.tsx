import React from 'react';
import useToggle from '../hooks/useToggle';

const InputComponent: React.FC = () => {
    const [value, toggleValue] = useToggle();

    return (
        <div>
            <p>{value ? 'true' : 'false'}</p>
            <button onClick={toggleValue}>Toggle Value</button>
        </div>
    );
};

export default InputComponent;
