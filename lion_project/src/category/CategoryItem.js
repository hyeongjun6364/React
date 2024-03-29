import React from 'react';
import { Link } from 'react-router-dom';
import  styled  from 'styled-components';
const CategoryLink = styled(Link)`
  text-decoration: none; /* 밑 줄 없애는 스타일 */
`;
const CategoryItem = ({ category, isSelected, onClick }) => {
  const handleClick = () => {
    onClick(category.id);
    
  };

  return (
    <Link to={`/${category.id}`}>
      <li
      className={isSelected ? 'selected' : ''}
      onClick={handleClick}
    >
      {category.name}
    </li>
    </Link>
    
  );
};

export default CategoryItem;
