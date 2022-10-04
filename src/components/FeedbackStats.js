import {useContext} from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

function FeedbackStats() {

    const {feedbackData} = useContext(FeedbackAppContext);
    
    const avgScore = feedbackData.reduce((total, current) => {
        return total + ( current.rating / feedbackData.length);
    }, 0);

    return(
        <div className="feedback-stats">
            <h4>There are {feedbackData.length}</h4>
            <h4>Average is {avgScore.toFixed(2)}</h4>
        </div>
    )

}

export default FeedbackStats;