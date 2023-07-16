import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from'react'
// news api key:c5edc801b19b4055a20e6d4b93dac840
const App=()=> {
  const[data, setData]= useState(null);
  const onClick=async()=>{
    try{
      const response=await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=c5edc801b19b4055a20e6d4b93dac840',);
      setData(response.data);
    }
    catch(e){
      console.log(e);
    } 
    };
      /*JSON.stringify(data,null,2)은 'data' 객체를 json문자열로 변환하는데
null은 변환 중에 사용될 변환 함수를 지정하는 매개변수로, 2는 들여쓰기 공백 수를 나타냅니다.
    */
  return(
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  )

  
  }


export default App;
