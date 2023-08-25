import React from 'react';
import './Question.scss';
import { useState } from 'react';
import QuestionItem from './QuestionItem';
import { Link } from 'react-router-dom';
import QnAlist from '../QnA/QnAlist.js'
function Question() {
    const question_item=[
        { id: 1, name: 'Q&A' },
        { id: 2, name: 'Study' },
        { id: 3, name: 'category 3' },
        { id: 4, name: 'category 4' },
        { id: 5, name: 'category 5' },
        
    ]
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

  const handleCategoryClick = (QuestionId) => {
    setSelectedQuestion(QuestionId);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredCategories = question_item.filter((category) =>
    category.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return (
    <div>
      <div className="cate">
        <Link to="/">
        <h2 className=''>Solver</h2>
        </Link>
        
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
          <QuestionItem
            key={category.id}
            category={category}
            isSelected={selectedQuestion === category.id}
            onClick={handleCategoryClick}
          />
        ))}
        
      </ul>
      {selectedQuestion !== null && (
        <p>선택한 카테고리: </p>
      )}
      <QnAlist/>
    </div>
    
    
  )
}

export default Question