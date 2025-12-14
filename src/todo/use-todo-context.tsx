import { useContext } from 'react';
import { TodoContext } from './todo-context';

const useTodoContext = () => {
    const todoContext = useContext(TodoContext);

    if (!todoContext) {
        throw new Error('Todo context is not provided');
    }

    return {
        ...todoContext,
    };
};

export default useTodoContext;
