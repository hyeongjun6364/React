import React from 'react';
import { Link } from 'react-router-dom';
const QuestionItem = ({ category, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(category.id);
  };

  return (
    <Link to={`/qustion/${category.id}`}>
      <li
      className={isSelected ? 'selected' : ''}
      onClick={handleClick}
    >
      {category.name}
    </li>
    </Link>
    
  );
};

export default QuestionItem;
