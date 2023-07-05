import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList'
import {useState,useRef,useCallback} from 'react';
const App = ()=>{
  const [todos, setTodos]=useState([
    {
      id:1,
      text:'리액트의 기초 알아보기',
      checked:true,

    },
    {
      id:2,
      text:'컴포넌트 스타일링 해보기',
      checked:true,

    },
    {
      id:3,
      text:'일정관리 앱 만들어 보기',
      checked:false,

    },
  ]);
  /*리렌더링이 필요없을때 useRef를 사용한다. 
  useState훅은 상태를 변경하고 리렌더링을 유발하는 반면, 
  useRef는 변경사항이 있어도 컴포넌트를 다시 렌더링 하지않는다.*/
  const nextId=useRef(4);
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
      //setTodos를 활용하여 Todo 상태를 업데이트 한다.
      //concat 메서드를 통해서 todos 배열과 ,todo를 합친다.
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },[todos],
  )
  const onRemove =useCallback(

    id => {
      //filter메서드를 사용하여 새로운 배열을 만든다.
      //주어진 id와 일치하지 않는 id들은 모두 렌더링된다.
      setTodos(todos.filter(todo => todo.id !==id))
    },
    [todos],
  )

  const onToggle = useCallback(
    //주어진 id가 순회중인id와 일치하는지 확인
    //...todo (스프레드 연산자) todo라는 객체의 내용 복사
      id => {
        setTodos(
          todos.map(todo => todo.id ===id ? {...todo, checked: !todo.checked}:todo,)
        )
      },[todos]
    );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>)

};
export default App;
