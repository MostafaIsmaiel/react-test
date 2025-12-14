import { useRef } from 'react';
import { Button } from './features/shared/components/button';

const RefExample = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = () => {
        if (!inputRef.current?.value) {
            inputRef.current?.focus();
        } else {
            alert(inputRef.current.value);
        }
    };

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
                className="border-border me-5 border"
            />
            <Button onClick={() => onSubmit()}>Submit</Button>
        </div>
    );
};

export default RefExample;
