import {useContext} from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

function FeedbackList() {

    const {feedbackData} = useContext(FeedbackAppContext);
    console.log(feedbackData);

    return (
        <div>
            List
        </div>
    )

}

export default FeedbackList;