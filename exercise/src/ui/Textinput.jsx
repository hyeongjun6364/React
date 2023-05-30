import React from 'react'
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
function Textinput(props) {
    const {height, value, onChange}= props
  return (
    <StyledTextarea height={height} value={value} onChange={onchange}></StyledTextarea>
  )
}

export default Textinput