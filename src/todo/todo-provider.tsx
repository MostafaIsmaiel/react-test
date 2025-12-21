import React, { useReducer } from 'react';
import { TodoContext } from './todo-context';
import { todoReducer } from './todoReducer';

type TodoProviderProps = {
    children?: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
