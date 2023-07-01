import React from "react";
import styled from "styled-components";
//props.height값이 존재할경우 height값이 적용된다.
const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
    const { height, value, onChange } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;