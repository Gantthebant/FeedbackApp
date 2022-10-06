import { createContext, useEffect, useState } from "react";

const FeedbackAppContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedbackData, setFeedbackData] = useState([]);
    const [editReview, setEditReview] = useState({
        item: {},
        edit: false,
    });
    const [error, setError] = useState();

    useEffect(() => {

        fetchFeedbackData();

    }, []);

    const fetchFeedbackData = async() => {
        try {
            const response = await fetch('http://127.0.0.1:5000/feedback');
            if(!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setFeedbackData(data);
        } catch (error) {
            setError('failed to fetch');
        }
        
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

        try{
            const response = await fetch('http://127.0.0.1:5000/feedback/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(review)
            });

            if(!response.ok) {
                throw new Error('failed to add new reviw');
            }

            const data = await response.json();

            setFeedbackData([data, ...feedbackData]);

        } catch(error) {
            setError(error);
        }
        
    }

    const editFeedback = (item) => {
        setEditReview({
            item,
            edit: true,
        })
    };

    const updateFeedback = async (id, updItem) => {
        try {

            const response = await fetch(`http://127.0.0.1:5000/feedback/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem)
            });

            if(!response.ok) {
                throw new Error('Failed to update');
            }

            const data = await response.json();


            setFeedbackData(feedbackData.map((item) => {
                return item.id === id ? {...item, ...data} : item;
            }));

        } catch (error) {
            setError(error);
        };
        
    }

    return <FeedbackAppContext.Provider value={{
        feedbackData,
        editReview,
        error,
        deleteReview,
        addReview,
        setEditReview,
        editFeedback,
        updateFeedback,
        setEditReview,
    }}>
        {children}
    </FeedbackAppContext.Provider>
}

export default FeedbackAppContext;