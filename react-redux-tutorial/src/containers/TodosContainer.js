import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeInput,insert,toggle,remove } from '../modules/todos'
import Todos from '../components/Todos'
import { useCallback } from 'react'
import useActions from '../lib/useAction'

const TodosContainer = () => {
    const {input, todos} = useSelector(({todos})=>({
        input:todos.input,
        todos:todos.todos,
    }))
    const dispatch=useDispatch();
    const[onChangeInput,onInsert,onToggle,onRemove]=useActions([ChangeInput,insert,toggle,remove],[])
  return (
    <Todos 
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
     />
  )
}

export default React.memo(TodosContainer);