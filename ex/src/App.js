import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState({});
  const apiUrl = 'http://localhost:8080/api/v1/posts/1'; // 주소를 변경해야 할 수도 있습니다.

  useEffect(() => {
    // Axios를 사용하여 데이터 가져오기
    axios.get(apiUrl)
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // []를 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.

  return (
    <div className="App">
      <h1>Post Data</h1>
      <pre>{JSON.stringify(postData, null, 2)}</pre>
      <p>{postData.id}</p>
    </div>
  );
}

export default App;
