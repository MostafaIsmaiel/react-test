import { useLayoutEffect, useRef, useState } from 'react';

const UseLayoutEffect = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width);
            setHeight(boxRef.current.getBoundingClientRect().height);
        }
    }, [boxRef.current]);

    return (
        <div style={{ padding: '20px' }}>
            <div ref={boxRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit
                nulla. Incidunt ipsa nemo quas debitis culpa dolore excepturi,
                qui natus commodi vitae eos sequi placeat blanditiis nostrum
                itaque consequuntur? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. A, odit nulla. Incidunt ipsa nemo quas debitis
                culpa dolore excepturi, qui natus commodi vitae eos sequi
                placeat blanditiis nostrum itaque consequuntur?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. A, odit nulla. Incidunt
                ipsa nemo quas debitis culpa dolore excepturi, qui natus commodi
                vitae eos sequi placeat blanditiis nostrum itaque
                consequuntur?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. A, odit nulla. Incidunt ipsa nemo quas debitis culpa
                dolore excepturi, qui natus commodi vitae eos sequi placeat
                blanditiis nostrum itaque consequuntur?
            </div>
            <div
                className="bg-red-200"
                style={{ width: width + 'px', height: height + 'px' }}
            >
                width is: {width}
                <br />
                height is: {height}
            </div>
        </div>
    );
};

export default UseLayoutEffect;
