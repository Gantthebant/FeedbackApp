import {useContext} from 'react';
import {FaTimes, FaEdit} from 'react-icons/fa';
import FeedbackAppContext from '../context/FeedbackAppContext';

function FeedbackReview({feedbackItem}) {

    const {deleteReview} = useContext(FeedbackAppContext);
    const {editFeedback} = useContext(FeedbackAppContext);

    return(
        <div className="card">
            <button className='close' onClick={() => deleteReview(feedbackItem.id)}>
                <FaTimes />
            </button>
            <button className='edit' onClick={() => editFeedback(feedbackItem)}>
                <FaEdit />
            </button>
            <div className="num-display">{feedbackItem.rating}</div>
            <div className="text-display">{feedbackItem.text}</div>
        </div>
    )

}

export default FeedbackReview;