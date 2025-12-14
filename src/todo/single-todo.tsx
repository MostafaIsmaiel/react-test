import { Button } from '@/features/shared/components/button';
import type { Todo } from './todo-context';
import useTodoContext from './use-todo-context';

type Props = {
    todo: Todo;
};

const SingleTodo = ({ todo }: Props) => {
    const { id, completed, title } = todo;
    const { toggleTodo } = useTodoContext();
    return (
        <li key={id}>
            <p
                style={{
                    textDecoration: completed ? 'line-through' : undefined,
                }}
            >
                {title}
            </p>
            <Button onChange={() => toggleTodo(id)}>toggling state</Button>
        </li>
    );
};

export default SingleTodo;
