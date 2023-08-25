import React, { useState,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Dropdown from './Dropdown'
import './Dropdown.css';
const slideFadeInDropdownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const SlideFadeInDropdown = styled.div`
overflow: hidden;

  > ul {
    animation: ${slideFadeInDropdownAnimation} 0.4s ease;
  }
`;

const slideFadeOutDropdownAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-100%);
  }
`;

const SlideFadeOutDropdown = styled.div`
overflow: hidden;

  > ul {
    animation: ${slideFadeOutDropdownAnimation} 0.4s ease;
    animation-fill-mode: forwards;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const App = props => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
      <div id='app'>
          <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
              {
                  dropdownVisibility
                      ? 'Close'
                      : 'Open'
              }
          </button>
          <Dropdown visibility={dropdownVisibility}>
              <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
              </ul>
          </Dropdown>
      </div>
  )
};

export default App;

// const Dropdowner = (props) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [repeat, setRepeat] = useState(null);
//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };
// //   useEffect(() => {
// //     if (showDropdown) {
// //         clearTimeout(repeat);
// //         setRepeat(null);
       
// //     } else {
// //         setRepeat(setTimeout(() => {
// //         }, 400));
// //     }
// // }, [showDropdown]);
//   return (
//     <div>
//       <Button onClick={toggleDropdown}>Toggle Dropdown</Button>
//       <article className={`${showDropdown ? SlideFadeInDropdown : SlideFadeOutDropdown}`}>
//             { showDropdown && <ul>
//             <li>Dropdown item 1</li>
//             <li>Dropdown item 2</li>
//             <li>Dropdown item 3</li>
//             <li>Dropdown item 3</li>
//           </ul> }
//         </article>
//        {/* <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
//             { visibilityAnimation && props.children }
//         </article> */}
//     </div>
//   );
// };
// export default Dropdowner