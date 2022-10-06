import {useContext} from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

import FeedbackReview from './FeedbackReview';

function FeedbackList() {

    const {feedbackData} = useContext(FeedbackAppContext);

    if (feedbackData.length === 0) {
        return (
            <p>No Data. Refresh</p>
        )
    } else {

        return (
            <div>
                {feedbackData.map((feedbackItem) => {
                    return <FeedbackReview key={feedbackItem.id} feedbackItem={feedbackItem}/>;
                })}
            </div>
        )
    }

}

export default FeedbackList;