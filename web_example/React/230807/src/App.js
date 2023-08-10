import {useCallback, useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초를 알아보기',
      checked: true
    }, {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    }, {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  const onInsert = useCallback(
      text => {
        if ( !text ) { alert('할 일을 입력해주시기 바랍니다.'); return }

        const todo = {
          id: todos.length + 1,
          text,
          checked: false
        }
        setTodos(todos.concat(todo));
      },
      [todos]
  );

  const onRemove = useCallback(
      id => {
          setTodos(todos.filter(todo => !(todo.id === id)))
      },
      [todos]
  );

  const onToggle = useCallback(
    id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
    },
    [todos]
  )


  return (
      <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
  )
}

export default App