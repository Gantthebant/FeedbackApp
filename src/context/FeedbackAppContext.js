import { createContext, useEffect, useState } from "react";

const FeedbackAppContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {

        fetchFeedbackData();

    }, []);

    const fetchFeedbackData = async() => {
        const response = await fetch('http://127.0.0.1:5000/feedback');
        const data = await response.json();
        setFeedbackData(data);
    };

    const deleteReview = async(id) => {
        await fetch(`http://127.0.0.1:5000/feedback/${id}`, {
            method: 'DELETE',
        });

        setFeedbackData(feedbackData.filter((item) => {
            return item.id !== id;
        }));
    };

    const addReview = async(review) => {

        const response = await fetch('http://127.0.0.1:5000/feedback/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })

        const data = await response.json();

        setFeedbackData([data, ...feedbackData]);{}
    }

    return <FeedbackAppContext.Provider value={{
        feedbackData,
        deleteReview,
        addReview,

    }}>
        {children}
    </FeedbackAppContext.Provider>
}

export default FeedbackAppContext;