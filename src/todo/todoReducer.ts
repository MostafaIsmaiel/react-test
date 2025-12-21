import type { Todo, TodoAction } from './todo-context';

export function todoReducer(state: Todo[], action: TodoAction) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false,
                },
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            );

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
    }
}
