import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useCallback, useRef, useState} from "react";

const App = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            content: '리액트 공부 하기',
            checked: true
        }, {
            id: 2,
            content: '스터디 공부 하기',
            checked: true
        }, {
            id: 3,
            content: '앱 만들기',
            checked: false
        }
    ])

    const idCount = useRef(todoList.length + 1)

    const handleInsert = useCallback((content) => {
        if (!content) { alert('할 일을 입력해주세요.'); return }

        const todo = {
            id: idCount.current,
            content,
            checked: false
        }
        idCount.current++

        setTodoList(todoList.concat(todo))
    }, [todoList])

    const handleRemove = useCallback((id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }, [todoList])

    const handleToggle = useCallback((id) => {
        setTodoList(todoList.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    }, [todoList])

    return (
        <TodoTemplate>
            <TodoInsert handleInsert={handleInsert} />
            <TodoList todoList={todoList} handleRemove={handleRemove} handleToggle={handleToggle} />
        </TodoTemplate>
    )
}


export default App;