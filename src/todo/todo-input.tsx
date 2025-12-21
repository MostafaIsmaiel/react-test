import { Button } from '@/features/shared/components/button';
import { useState } from 'react';
import useTodoContext from './use-todo-context';

const TodoInput = () => {
    const { dispatch } = useTodoContext();
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="mx-auto mt-8 flex w-fit gap-4">
            <input
                type="text"
                className="border-border min-w-sm border p-4"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />

            <Button
                onClick={() =>
                    dispatch({
                        type: 'ADD_TODO',
                        payload: { title: inputValue },
                    })
                }
            >
                Add Todo
            </Button>
        </div>
    );
};

export default TodoInput;
