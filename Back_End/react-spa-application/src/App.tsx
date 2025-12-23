import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import './App.css';

type Page = 'home' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;