import {FeedbackProvider} from './context/FeedbackAppContext';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import AboutIcon from './components/AboutIcon';

function App() {
  return (
    <FeedbackProvider>
        <Router>

          <Header />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={
                <>
                  <AboutIcon />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              } />

              <Route path='/about' element={
                <AboutPage />
              } />

              <Route path='/*' element= {
                <NotFound />
              } />
            </Routes>
          </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
