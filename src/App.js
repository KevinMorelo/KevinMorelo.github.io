import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import History from './components/History';
import Servicios from './components/Servicios';
import Works from './components/Works';
import Online from './components/Online';
import Form from './components/Form';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <History />
              <Servicios />
              <Works />
              <Online />
              <Form />
              <Footer />
            </>
          }
        />

        {/* Página “Sobre mí” con Header + AboutMe solamente */}
        <Route
          path="/about"
          element={
            <>
              <AboutMe />
            </>
          }
        />

        {/* Página “Contacto” con Header + ContactForm */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactForm />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
