import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
            <h3>add</h3>
        </div>
    );
}
export default Clock;