import TodoListItem from "./TodoListItem";
import "../sass/TodoList.scss"



const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItem>
            ))}
        </div>
    )
}



export default TodoList;