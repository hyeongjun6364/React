import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // 여기서 검색을 수행하고, 검색 결과를 처리하는 로직을 구현합니다.
    console.log('검색어:', searchText);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="검색어를 입력하세요..."
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar;
