import {useContext} from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

import FeedbackReview from './FeedbackReview';

function FeedbackList() {

    const {feedbackData} = useContext(FeedbackAppContext);

    return (
        <div>
            {feedbackData.map((feedbackItem) => {
                return <FeedbackReview key={feedbackItem.id} feedbackItem={feedbackItem}/>;
            })}
        </div>
    )

}

export default FeedbackList;