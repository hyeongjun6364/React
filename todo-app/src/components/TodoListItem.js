import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss';
import cn from 'classnames';
import React from'react';

const TodoListItem = ({todo,onRemove,onToggle,style}) =>{
    const{id,text, checked}= todo;
    
    return (
        //<div className={cn('checkbox',{checked})}>  => cn 함수를 통해 checkbox클래스 항상 부여하고 checked에 따라 동적으로 스타일 바뀜  
        <div className='TodoListItem-virtualized' style={style}>
            <div className="TodoListItem" >
                <div className={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
        </div>
        
    );
};

export default React.memo(TodoListItem);