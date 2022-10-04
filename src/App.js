import {FeedbackProvider} from './context/FeedbackAppContext';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

function App() {
return (
  <FeedbackProvider>
    <div>
      <Header />
      <div className='container'>
        {/* feedbackform */}
        {/* feedback stats */}
        <FeedbackList />
      </div>
    </div>
  </FeedbackProvider>
);
}

export default App;
