import {Link} from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>404 PAGE NOT FOUND</h1>
            <Link to='/'>
                <p>Home</p>
            </Link>
        </div>
    )
}

export default NotFound;