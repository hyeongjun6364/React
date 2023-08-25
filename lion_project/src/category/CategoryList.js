import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import './CategoryList.scss'; // 새로운 SCSS 파일 추가
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import SliderComponent from '../slider/Slider';
const CategoryList = () => {
  const categories = [
    { id: 1, name: '질문방' },
    { id: 2, name: 'category 2' },
    { id: 3, name: 'category 3' },
    { id: 4, name: 'category 4' },
    { id: 5, name: 'category 5' },
    { id: 6, name: 'category 6' },
    { id: 7, name: 'category 7' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );


  return (
    <div>
      <div className="cate">
        <h2 className=''>Solver</h2>
        <div className="search-container">
          <input
            type="text"
            value={searchKeyword}
            onChange={handleSearchChange}
            placeholder="검색..."
          />
        </div>
        <div className="login-container">
          <Link to="/Login">
          <button className="login-button" >로그인</button>
          </Link>
          <Link to="SignUp">
          <button className="signup-button">회원가입</button>
          </Link>
          
        </div>
      </div>
      <ul className="category-list">
        {filteredCategories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onClick={handleCategoryClick}
          />
        ))}
      </ul>
      {selectedCategory !== null && (
        <p>선택한 카테고리:  </p>
      )}
      <SliderComponent/>
    </div>
  );
};

export default CategoryList;
