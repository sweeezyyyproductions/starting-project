import classes from'./post.module.css';

function Post({ author, body}) {
    

    return (
        
            <li className={classes.post}>
                <h1 className={classes.author}>{author}</h1>
                <p className={classes.text}>{body}</p>
            </li>
    
    
    );
    
    

}


export default Post