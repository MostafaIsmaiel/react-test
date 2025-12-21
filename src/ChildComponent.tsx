import { useEffect, useState } from 'react';

const ChildComponent = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Mount');

        return () => {
            console.log('Unmount');
        };
    }, [name]);

    return (
        <div>
            current name is:
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="border-border border"
            />
        </div>
    );
};

export default ChildComponent;
