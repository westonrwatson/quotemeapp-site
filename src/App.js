// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhonesShowcase from './components/PhonesShowcase';
import PrivacySection from './components/PrivacySection';
import FeedbackSection from './components/FeedbackSection';
import TestimonialsSection from './components/TestimonialsSection';
import PrivacyPage from './components/PrivacyPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <PhonesShowcase />
              <TestimonialsSection />
            </>
          } />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;