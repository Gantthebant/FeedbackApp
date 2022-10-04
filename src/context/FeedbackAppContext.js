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
        setFeedbackData(data)
    }
    return <FeedbackAppContext.Provider value={{
        feedbackData,
    }}>
        {children}
    </FeedbackAppContext.Provider>
}

export default FeedbackAppContext;