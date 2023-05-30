import React, {useState, useEffect} from "react"
import useCounter from "./useCounter"

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    //커스텀 훅, 0을 가지는 count 변수화 increaseCount, decreaseCount함수를 반환
    const [count, increaseCount, decreaseCount] = useCounter(0);
    useEffect(()=>{
        console.log("hi");
    },[])
//의존성 배열이 없는 경우
//컴포넌트가 마운트된 직후 호출됨, 이후 컴포넌트 업데이트 될때마다 호출
    useEffect(() => {
        console.log("==================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });
//의존성 배열이 있는 경우
//컴포넌트가 마운트된 직후에 호출됨, 값이 바뀔때마다 호출됨
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);

    }, [count]);

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다. `} </p>
            <button onClick={increaseCount} disabled ={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
            </div>
        
    );
}
export default Accommodate;