import logo from './logo.svg';
import './App.css';
import {useRef, useCallback, useState} from 'react';
import {produce} from 'immer';

const App=() => {
  const nextID = useRef(1);
  const [form, setForm] = useState({name:'',username:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
});

//input 수정을 위한 함수
const onChange = useCallback(
  //e는 event 객체를 나타낸다 -> 이벤트가 발생한 요소에서 target 속성을 사용하여 해당요소 접근
  //e.target은 해당 input요소를 가리킨다.
  e=> {
    const {name,value} = e.target;
    // form 객체의 내용을 복사하고 name을 value 값으로 업데이트 한다.
    //REACT에서 상태를 변경할때는 불변성 유지를 해야한다
    setForm(
    //...form, [name]:[value]
      produce(draft => {
        draft[name]=value;

      })
    );
  },
  [form]
)

//form 등록을 위한 함수
const onSubmit = useCallback(
  e => {
    e.preventDefault();
    const info = {
      id:nextID.current,
      name: form.name,
      username: form.username
    };

  //array에 새 항목 등록
  setData(
    //...data,
    //array:data.array.concat(info)

    produce(draft => {
      draft.array.push(info);
    })
  );

  //form 초기화
  setForm({
    name:'',
    username:'',

  })
  nextID.current +=1;
  
  },
  [data, form.name, form.username]
)

//항목 삭제하는 함수
const onRemove=useCallback(
  id => {
    setData(
      //...data,
      //array:data.array.filter(info=>info.id !==id)

      produce(draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
      })
    );
  },
  [data]
)

return (
  <div>
    <form onSubmit={onSubmit}>
      <input name='username' placeholder='아이디' value={form.username} onChange={onChange}/>
      <input name='name' placeholder='이름' value={form.name} onChange={onChange}/>
      <button type='submit'>등록</button>
    </form>
    <div>
      <ul>
        {data.array.map(info => (
          <li key={info.id} onClick={()=>onRemove(info.id)}>
            {info.username} ({info.name})
          </li>
        ))}
      </ul>
    </div>
  </div>
)

}
export default App;
