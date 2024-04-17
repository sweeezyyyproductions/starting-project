import PostList from '../components/postsList';
import { Outlet  } from 'react-router-dom';

function Posts() {
  return (
    <>
    <Outlet/>
    <main>
    <PostList/>
  </main>
    </>
    
  ); 
}

export default Posts;
