import { createContext } from "react";

const FeedbackAppContext = createContext();

export const FeedbackProvider = ({children}) => {

    return <FeedbackAppContext.Provider>

    </FeedbackAppContext.Provider>
}

export default FeedbackAppContext;