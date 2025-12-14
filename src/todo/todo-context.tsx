import { createContext } from 'react';

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

type TodoContextType = {
    todos: Todo[];
    addTodo: (title: string) => void;
    toggleTodo: (id: number) => void;
};

export const TodoContext = createContext<null | TodoContextType>(null);
