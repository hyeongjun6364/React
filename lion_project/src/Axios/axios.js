import React, {useState,useEffect} from 'react'
import axios from 'axios';


const MyComponent = () => {
    const [posts,setPosts] = useState([]);
  useEffect(() => {
    axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts'
    })
      .then(response => setPosts(response.data))
      
  });

  return <div>{posts.length}</div>;
};

export default MyComponent;