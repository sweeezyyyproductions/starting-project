import Post from './post';
import { useLoaderData } from 'react-router-dom';
import classes from './postsList.module.css';




function PostList () {
    const posts = useLoaderData();


    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method:'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts ((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
             
             {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul> 
             
             )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: '#895c49' }}>
                    <h2>Nobody has posted anything</h2>
                    <p>Create a new post to be the first!</p>
                    
                </div>
            )}
       </> 
    );
};

export default PostList