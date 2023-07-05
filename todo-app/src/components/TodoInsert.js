import {MdAdd} from 'react-icons/md';
import "./TodoInsert.scss";
import {useState, useCallback} from 'react'

const TodoInsert=({onInsert})=> {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[])
    // form이 제출될때 호출된다
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('')// value값 초기화
            //submit 이벤트는 브라우저에서 새로고침을 유발한다.
            e.preventDefault();
        },
        [onInsert,value],
    );
    
    const onClick = useCallback(
        e=> {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value],
    )
    /* onclick(button한정)과 onsubmit(form에 묶어놓고 사용)의 차이는 
    엔터 키를 눌러도 상태가 이벤트가 발생하는지를 보면된다.
    onclick은 단순히 클릭만 발생하지만 onsubmit은 엔터키를 눌러도 발생함*/
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
            value={value}
            onChange={onChange}/>
            <button types="submit" >
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert