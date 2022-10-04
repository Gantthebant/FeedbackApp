function FeedbackReview({feedbackItem}) {
    
    return(
        <div className="card">
            <div className="num-display">{feedbackItem.rating}</div>
            <div className="text-display">{feedbackItem.text}</div>
        </div>
    )

}

export default FeedbackReview;