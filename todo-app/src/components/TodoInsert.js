import {MdAdd} from 'react-icons/md';
import "./TodoInsert.scss";
import {useState, useCallback} from 'react'

const TodoInsert=()=> {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[])

    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 선택하세요"
            value={value}
            onChange={onChange}/>
            <button types="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert