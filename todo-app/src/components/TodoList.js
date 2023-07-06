import TodoListItem from "./TodoListItem";
import './TodoList.scss'
import React,{useCallback} from'react';
import {List} from 'react-virtualized'


const TodoList = ({todos,onRemove,onToggle}) => {
    const rowRenderer=useCallback(
        ({index,key,style}) => {
            const todo =todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style} 
                    />
            )
        }, [onRemove, onToggle,todos],
    )

    return (
        <List 
            className="TodoList"
            width={504.2}// 전체크기
            height={505.2}//전체 높이
            rowCount={todos.length}// 항목 개수
            rowHeight={56}
            rowRenderer={rowRenderer}//항목을 렌더링 할 때 쓰는 함수
            list={todos}
            style={{outline:'none'}}
        />
    );
};



export default React.memo(TodoList);