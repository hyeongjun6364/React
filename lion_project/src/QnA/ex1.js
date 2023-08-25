import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideFadeInDropdownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

const SlideFadeInDropdown = styled.article`
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

const SlideFadeOutDropdown = styled.article`
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

const Dropdown = (props) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400));
    }
  }, [props.visibility]);

  return (
    <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
      {visibilityAnimation && props.children}
    </article>
  );
};

const App = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <div id='app'>
      <Button onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        질문방
      </Button>
      <Dropdown visibility={dropdownVisibility}>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </Dropdown>
    </div>
  );
};

export default App;
