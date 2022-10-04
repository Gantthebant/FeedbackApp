import {useContext} from 'react';
import {FaTimes} from 'react-icons/fa';
import FeedbackAppContext from '../context/FeedbackAppContext';

function FeedbackReview({feedbackItem}) {

    const {deleteReview} = useContext(FeedbackAppContext);

    return(
        <div className="card">
            <button className='close' onClick={() => deleteReview(feedbackItem.id)}>
                <FaTimes />
            </button>
            <div className="num-display">{feedbackItem.rating}</div>
            <div className="text-display">{feedbackItem.text}</div>
        </div>
    )

}

export default FeedbackReview;