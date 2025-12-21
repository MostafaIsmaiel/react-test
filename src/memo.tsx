import React, { useCallback } from 'react';
import { Button } from './features/shared/components/button';

const Memoization = () => {
    const [number, setNumber] = React.useState(0);

    const expensive = () => {
        let result = 0;
        for (let i = 0; i < 1e1; i++) result += i;
        return result;
    };

    const incrementNumber = useCallback(() => {
        setNumber(prev => prev + 1);
    }, []);

    return (
        <div className="space-y-4">
            <h1>Memoization Example</h1>
            <p>Expensive Computation Result: {expensive()}</p>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(Number(e.target.value))}
            />
            <Child value={expensive()} increment={incrementNumber} />
        </div>
    );
};

export default Memoization;

const Child = ({
    value,
    increment,
}: {
    value: number;
    increment: () => void;
}) => {
    console.log('Trigger Child');

    return (
        <div className="space-y-4">
            <p>{value}</p>
            <Button size={'lg'} onClick={e => increment()}>
                Increment
            </Button>
        </div>
    );
};
