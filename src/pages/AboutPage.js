import {Link} from 'react-router-dom';

function AboutPage() {
    return(
        <div className="card">
            <div>
                <h1>About This Project</h1>
                <p>This is a React feedback app to leave feedback for an aproduct or services using json backend server for backend for accessing data and updating it or adding more reviews for permenant records.</p>
            </div>
            <Link to='/'>
                <p>Back to Feedback</p>
            </Link>
        </div>
    )
}

export default AboutPage;