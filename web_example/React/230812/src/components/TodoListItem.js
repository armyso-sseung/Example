import cn from "classnames"
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import '../styles/TodoListItem.scss'


const TodoListItem = ({ todo, handleRemove, handleToggle }) => {
    const {id, content, checked} = todo
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => handleToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="content">{content}</div>
            </div>
            <div className="remove" onClick={() => handleRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}


export default TodoListItem