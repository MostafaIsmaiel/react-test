import { createContext, type Dispatch } from 'react';

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

export type TodoAction =
    | { type: 'ADD_TODO'; payload: { title: string } }
    | { type: 'TOGGLE_TODO'; payload: { id: number } }
    | { type: 'DELETE_TODO'; payload: { id: number } };

type TodoContextType = {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
};

export const TodoContext = createContext<null | TodoContextType>(null);
