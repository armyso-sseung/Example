import {useCallback, useState} from "react";
import {MdAdd} from "react-icons/md";
import "../sass/TodoInsert.scss"



const TodoInsert = ({ onInsert }) => {
    const [ value, setValue ] = useState('')


    const onChange = useCallback(
        e => {
            setValue(e.target.value)
        },
        []
    );

    const onClick = useCallback(        e => {
            if (e.key?.includes('Enter') || e.type?.includes('click')) {
                onInsert(value)
                setValue('')
            }
        },
        [onInsert, value]
    );


    return (
        <div className="TodoInsert">
            <input placeholder="할 일을 입력하세요." value={value} onChange={onChange} onKeyDown={onClick} />
            <button type={"submit"} onClick={onClick}>
                <MdAdd />
            </button>
        </div>
    )
}



export default TodoInsert;