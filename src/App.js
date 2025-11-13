import React from 'react';

import { Helmet } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <GlobalStyles />
      <Helmet>
        <html lang={i18n.language} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;