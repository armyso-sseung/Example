import TodoListItem from "./TodoListItem";
import '../styles/TodoList.scss'

const TodoList = ({todoList, handleRemove, handleToggle}) => {
    return (
        <div className="TodoList">
            {todoList.map(todo => (<TodoListItem todo={todo} key={todo.id} handleRemove={handleRemove} handleToggle={handleToggle} />))}
        </div>
    )
}


export default TodoList