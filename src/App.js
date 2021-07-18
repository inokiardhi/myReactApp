import { Fragment } from 'react';
import './App.css';
import Education from './components/eduEx/Education';
import Experience from './components/eduEx/Experience';
import Footer from './components/footer/Footer';
import ContactForm from './components/form/ContactForm';
import HeaderMe from './components/header/HeaderMe';
import NavbarMe from './components/navbar/NavbarMe';

function App() {
  return (
    <Fragment>
      <NavbarMe />
      <HeaderMe />
      <Education />
      <Experience />
      <ContactForm />
      <Footer />
    </Fragment>
    
  );
}

export default App;
