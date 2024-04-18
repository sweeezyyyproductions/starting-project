import Post from './post';
import { useLoaderData } from 'react-router-dom';
import classes from './postsList.module.css';




function PostList () {
    const posts = useLoaderData();



    return (
        <>
             
             {posts.length > 0 && (<ul className={classes.posts}>
                {posts.map((post) => 
                    <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    )}
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