import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import {useCallback, useRef, useState} from "react";
import TodoList from "./components/TodoList";


const App = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            content: '리엑트의 기초를 알아보기',
            checked: true
        }, {
            id: 2,
            content: '컴포넌트 스타일링 해보기',
            checked: true
        }, {
            id: 3,
            content: '일정 관리 앱 만들어 보기',
            checked: false
        }
    ])

    const idCount = useRef(todoList.length)

    const handleInsert = useCallback((content) => {
        if (!content) { alert('할 일을 입력해 주세요.'); return }

        const todo = {
            id: idCount.current + 1,
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
        setTodoList(todoList.map( todo => todo.id === id ? {...todo, checked: !todo.checked} : todo ))
    })

    return (
      <TodoTemplate>
          <TodoInsert handleInsert={handleInsert} />
          <TodoList todoList={todoList} handleRemove={handleRemove} handleToggle={handleToggle} />
      </TodoTemplate>
    )
}


export default App;