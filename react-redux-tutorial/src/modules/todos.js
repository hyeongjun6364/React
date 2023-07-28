import React from 'react'
import {createAction, handleActions} from 'redux-actions'
import produce from 'immer'


const CHANGE_INPUT='todos/CHANGE_INPUT'//인풋값을 변경함
const INSERT='todos/INSERT'//새로운 toto를 등록함
const TOGGlE='todos/TOGGle'//todo를 체크/체크해제함
const REMOVE='todos/REMOVE'//todo를 제거함


export const ChangeInput = createAction(CHANGE_INPUT, input=>input)
let id =3;

export const insert = createAction(
    INSERT,
    text=>({
        id:id++,
        text,
        done:false,
    })
)

export const toggle = createAction(TOGGlE,id=>id)

export const remove = createAction(REMOVE,id=>id)

const initialState = {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 기초 배우기',
            done:true,
        },
        {
            id:2,
            text:'리액트와 리덕스 사용하기',
            done: false,
        }
    ]

}
const todos = handleActions(
    {
        [CHANGE_INPUT]:(state, {paylaod: input}) => ({...state, input}),
        [INSERT]:(state,{payload: todo})=>({...state, todos:state.todos.concat(todo)}),
        [TOGGlE]:(state,{payload:id})=>({...state,todos:state.todos.map(todo => todo.id===id
            ? {...todo,done:!todo.done}:todo)}),
        [REMOVE]:(state,{paylaod:id}) => ({...state, todos:state.todos.filter(todo => todo.id !==id)
        }),

    },
    initialState,
)
export default todos