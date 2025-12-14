import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TodosList from './todo/index.tsx';
import TodoProvider from './todo/todo-provider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TodoProvider>
            <TodosList />
        </TodoProvider>
    </StrictMode>,
);
