import { useState, useEffect } from 'react';
import Post from './post';
import classes from'./postsList.module.css';




function PostList () {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
        const response = await fetch ('http://localhost:8080/posts')
        const resData = await response.json();
        if (!response.ok) {
            
        }

        setPosts(resData.posts);
        setIsFetching(false);
            }

            fetchPosts();
    }, []);


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
             
             {!isFetching && posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul> 
             
             )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: '#895c49' }}>
                    <h2>Nobody has posted anything</h2>
                    <p>Create a new post to be the first!</p>
                    
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: 'center', color:'#69483a' }}>
                <p>Loading...</p>
                </div>
            )} 
       </> 
    );
};

export default PostList