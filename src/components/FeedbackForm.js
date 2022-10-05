import { useState, useContext } from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

import Rating from './Rating';
import FormButton from './FormButton';

function FeedbackForm() {

    const {addReview} = useContext(FeedbackAppContext);

    const [rating, setRating] = useState(10);
    const [text, setText] = useState();
    const [btnDisabled, setBtnDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            rating,
            text,
        };

        addReview(newReview);
        setText('');
    }

    const handleButton = (e) => {
        if(e.target.value.trim() < 5 && rating === undefined) {
            setBtnDisabled(true);
        }

        if(e.target.value.length >= 5 && rating !== undefined) {
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    return(
        <div className="card">
            <form onSubmit={handleSubmit}>
                <h2> Leave a review for us!</h2>
                    <Rating select={(rating) => {setRating(rating)}}/>
                    <div className="input-group">
                        <input type='text' placeholder='Write more than 4 letters' onChange={handleButton}></input>
                        <button type='submit' disabled={btnDisabled} className={`btn btn-primary`}>
                            Submit
                        </button>
                    </div>
            </form>
            
        </div>
    )
}

export default FeedbackForm;