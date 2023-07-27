import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ChangeInput,insert,toggle,remove } from '../modules/todos'
import Todos from '../components/Todos'
function TodosContainer({input,todos,ChangeInput,insert,toggle,remove,}) {
    
  return (
    <Todos 
        input={input}
        todos={todos}
        onChangeInput={ChangeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
     />
  )
}

export default connect(
    ({todos})=>({
        input:todos.input,
        todos:todos.todos,
    }),
    {
        ChangeInput,
        insert,
        toggle,
        remove,
    }
)(TodosContainer)