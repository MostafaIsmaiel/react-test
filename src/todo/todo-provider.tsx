import React, { useState } from 'react';
import { TodoContext, type Todo } from './todo-context';

type TodoProviderProps = {
    children?: React.ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        setTodos(prev => [
            ...prev,
            { id: Date.now(), title, completed: false },
        ]);
    };

    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
