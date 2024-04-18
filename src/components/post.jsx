import classes from'./post.module.css';
import { Link } from 'react-router-dom';
function Post({ id, author, body}) {
    

    return (
        <li className={classes.post}>
            <Link to={id}>
                <h1 className={classes.author}>{author}</h1>
                <p className={classes.text}>{body}</p>
            </Link>
        </li>
    );
    
    

}


export default Post