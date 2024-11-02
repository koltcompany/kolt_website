import React from 'react';

import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import i18n from './i18n';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Helmet>
        <html lang={i18n.language} />
        <title>Kolt | AI-Driven Construction Solutions.</title>
        <meta name="description" content="Kolt leverages AI and modern technology to bring efficiency to construction sites and add value to all parties in the supply chain." />
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