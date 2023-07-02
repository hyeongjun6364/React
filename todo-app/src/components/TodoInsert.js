import {MdAdd} from 'react-icons/md';
import "./TodoInsert.scss";


const TodoInsert=()=> {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 선택하세요"/>
            <button types="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert