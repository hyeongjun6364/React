import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList'
import {useReducer,useState,useRef,useCallback} from 'react';

function createBulkTodos(){
  const array=[];
  for(let i=1;i<=2500; i++){
    array.push({
      id:i,
      text:`할 일${i}`,
      checked:false,
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !==action.id)
    case 'TOGGLE':
      return todos.map(todo => todo.id===action.id ? {...todo, checked: !todo.checked}:todo,);
    default:
      return todos;
  }
  
}

const App = ()=>{
  //dispatch는 액션을 발생시키는 함수로 리듀서 함수에게 액션을 전달하여 상태를 업데이트 한다
  const [todos, dispatch]=useReducer(todoReducer,undefined,createBulkTodos);
  /*리렌더링이 필요없을때 useRef를 사용한다. 
  useState훅은 상태를 변경하고 리렌더링을 유발하는 반면, 
  useRef는 변경사항이 있어도 컴포넌트를 다시 렌더링 하지않는다.*/
  const nextId=useRef(2501);
  //todos라는 상태가 변경 될 때만 함수가 재생성되도록 설정
  /* useCallback 훅을 사용하는 이유??
     함수가 바뀌게 되면 하위 컴포넌트까지 리렌더링 되기때문에 이를 방지하고자 
     함수를 재사용하기 위해 useCallback 훅을 사용한다
     => 성능 최적화를 위해
  */ 
  const onInsert = useCallback(
    text => {
      const todo={
        id:nextId.current, 
        text,
        checked:false,
      };
      dispatch({type:'INSERT',todo});
      //setTodos를 활용하여 Todo 상태를 업데이트 한다.
      //concat 메서드를 통해서 todos 배열과 ,todo를 합친다.
      /*todos => 이전 상태값을 나타내고 새로운 상태를 계산하기 위해 
      이전 상태를 이용하여 업데이트를 수행한다. -> 함수형 업데이트기능
      
      또한 의존성 배열을 빈 배열로 놔두는 이유는 처음 한번만 생성되고
      컴포넌트가 리 렌더링 되더라도 동일한 함수를 재사용 하게 하기 위함이다.
      -> 성능 최적화
      */
      //setTodos(todos => todos.concat(todo));
      nextId.current +=1;
    },[]
  )
  const onRemove =useCallback(

    id => {
      //filter메서드를 사용하여 새로운 배열을 만든다.
      //주어진 id와 일치하지 않는 id들은 모두 렌더링된다.
      //setTodos(todos => todos.filter(todo => todo.id !==id))

      dispatch({type:'REMOVE',id})
    },
    [],
  )



  const onToggle = useCallback(
    //주어진 id가 순회중인id와 일치하는지 확인
    //...todo (스프레드 연산자) todo라는 객체의 내용 복사
      // id => {
      //   setTodos(
      //     todos =>
      //     todos.map(todo => todo.id ===id ? {...todo, checked: !todo.checked}:todo,)
      //   )
      // },[]
      id => {dispatch({
        type:'TOGGLE', id
      })}
    );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>)

};
export default App;
