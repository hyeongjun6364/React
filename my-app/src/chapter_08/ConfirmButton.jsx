import React, {useState} from"react";
function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    //arrow function사용
    const handleConfirm = () =>{
        setIsConfirmed((IsConfirmed) => !IsConfirmed);

    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}


//class 컴포넌트
/*
class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };
        //바인딩
        //this.handleConfirm = this.handleConfirm.bind(this);
        //}
    
   
    }
    //arrow function
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }))
    }
    render(){
        return(
            <button onClick={this.handleConfirm}
            disabled={this.state.isConfirmed}
            >
            {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );


    }
}*/

export default ConfirmButton;