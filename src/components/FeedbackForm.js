import { useState } from 'react';

import Rating from './Rating';

function FeedbackForm() {
    const [select, setSelect] = useState();
    const [text, setText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text , select);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    return(
        <div className="card">
            <form onSubmit={handleSubmit}>
                <h2> Leave a review for us!</h2>
                    <Rating select={(rating) => {setSelect(rating)}}/>
                    <div>
                        <input type='text' placeholder='What did you think about us today?' onChange={handleText}></input>
                        <button>Submit</button>
                    </div>
            </form>
            
        </div>
    )
}

export default FeedbackForm;