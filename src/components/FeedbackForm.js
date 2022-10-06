import { useState, useContext, useEffect } from 'react';
import FeedbackAppContext from '../context/FeedbackAppContext';

import Rating from './Rating';
import FormButton from './FormButton';

function FeedbackForm() {

    const {addReview} = useContext(FeedbackAppContext);
    const {editReview} = useContext(FeedbackAppContext);
    const {updateFeedback} = useContext(FeedbackAppContext);
    const {setEditReview} = useContext(FeedbackAppContext);

    const [rating, setRating] = useState(10);
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {

        if(editReview.edit === true) {
            setRating(editReview.item.rating);
            setText(editReview.item.text);
        }

    }, [updateFeedback])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 5 ) {
            const newReview = {
                rating,
                text: text.trim(),
            };

            if (editReview.edit === true) {
                console.log('one')
                updateFeedback(editReview.item.id, newReview);
            } else {
                console.log('two')
                addReview(newReview);
            }
            
            setEditReview({
                edit: false
            });

            console.log(editReview);

            setText('');
        }
    }

    const handleButton = (e) => {
        if(e.target.value.trim() < 5) {
            setBtnDisabled(true);
        }

        if(e.target.value.length >= 5) {
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
                        <input type='text' placeholder='Write more than 4 letters' onChange={handleButton} value={text}></input>
                        <button type='submit' disabled={btnDisabled} className={`btn btn-primary`}>
                            Submit
                        </button>
                    </div>
            </form>
            
        </div>
    )
}

export default FeedbackForm;