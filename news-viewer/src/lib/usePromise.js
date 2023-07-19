import {useState, useEffect} from 'react'
import React from 'react'
//프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 보통 src 디렉터리에 lib디렉터리를 만든후 작성한다.


// 커스텀 Hook만들기


export default function usePromise(promiseCreator, deps) {
    const [loading, setLoading] = useState(false)
    const [resolved, setResolved] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const process = async() =>{
            setLoading(true);
            try{
                const resolved = await promiseCreator();
                setResolved(resolved);

            }
            catch(e){
                setError(e);
            }
            setLoading(false);
        };
        process();
        },deps)
  return [loading,resolved,error]
}