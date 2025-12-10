import { useEffect, useState } from 'react';

type Props = {
    name: string;
};

const ChildComponent = (props: Props) => {
    const { name } = props;

    const [color, setColor] = useState('black');

    useEffect(() => {
        if (name !== 'posts') {
            setColor('blue');
        } else {
            setColor('black');
        }
    }, [name]);

    return (
        <div>
            <p style={{ color: color }}>{name}</p>
        </div>
    );
};

export default ChildComponent;
