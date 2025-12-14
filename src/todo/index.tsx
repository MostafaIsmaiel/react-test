import SingleTodo from './single-todo';
import TodoInput from './todo-input';
import useTodoContext from './use-todo-context';

const TodosList = () => {
    const { todos } = useTodoContext();

    return (
        <div className="mx-auto">
            <TodoInput />
            {todos.map(todo => {
                return <SingleTodo key={todo.id} todo={todo} />;
            })}
        </div>
    );
};

export default TodosList;
