// App.js
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhonesShowcase from './components/PhonesShowcase';
import PrivacySection from './components/PrivacySection';
import FeedbackSection from './components/FeedbackSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <PrivacySection /> */}
      <PhonesShowcase />
      {/* <FeedbackSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;