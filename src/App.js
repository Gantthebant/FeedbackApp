import {FeedbackProvider} from './context/FeedbackAppContext';

import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';

function App() {
return (
  <FeedbackProvider>
    <div>
      <Header />
      <div className='container'>
        {/* feedbackform */}
        <FeedbackStats />
        <FeedbackList />
      </div>
    </div>
  </FeedbackProvider>
);
}

export default App;
