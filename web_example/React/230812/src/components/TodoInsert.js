import {MdAdd} from "react-icons/md";
import {useCallback, useState} from "react";
import '../styles/TodoInsert.scss'

const TodoInsert = ({handleInsert}) => {
    const [content, setContent] = useState('')

    const handleChange = useCallback((e) => {
        setContent(e.target.value)
    }, [])

    const handleClick = useCallback((e) => {
        if (e.key?.includes('Enter') || e.type?.includes('click')) {
            handleInsert(content)
            setContent('')
        }
    }, [content])

    return (
        <div className="TodoInsert">
            <input type="text" placeholder="할 일을 입력해주세요." value={content} onChange={handleChange} onKeyDown={handleClick} />
            <button onClick={handleClick}><MdAdd /></button>
        </div>
    )
}


export default TodoInsert;