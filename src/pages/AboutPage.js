import {Link} from 'react-router-dom';

function AboutPage() {
    return(
        <div className="card">
            <div>
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for aproduct or services using json backend server.</p>
            </div>
            <Link to='/'>
                <p>Back to Feedback</p>
            </Link>
        </div>
    )
}

export default AboutPage;