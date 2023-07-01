//상수 객체 정의 - 두개의 속성을 가짐
const scaleNames ={
    c:'섭씨',
    f:"화씨",
};

//함수 컴포넌트
//props로 temperature 와 scale을 받는다
function TemperatureInput(props){
    //이벤트 핸들러
    const handleChange = (event) =>{
        //변경된 값이 상위 컴포넌트로 전달됨
        //event.target.value는 사용자가 입력한 텍스트를 나타냄
        props.onTemperatureChange(event.target.value);
        console.log(event.target.value);
    };

    return(
        <fieldset>
            <legend>
            온도를 입력해주세요(단위:{scaleNames[props.scale]})
            </legend>
            
            <input value={props.temperature} onChange={handleChange
            } />
        </fieldset>
    );

    
}
export default TemperatureInput;