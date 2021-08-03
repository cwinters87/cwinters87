import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [aboutMeSelected, setAboutMeSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <Container fluid>
      <Header
        setAboutMeSelected={setAboutMeSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>

      {!aboutMeSelected ? (
            <>
              <div />
            </>
          ) : (
              <AboutMe />
          )}

        {!contactSelected ? (
            <>
              <div />
            </>
          ) : (
            <ContactMe />
          )}

        {!portfolioSelected ? (
            <>
              <div />
            </>
          ) : (
              <Portfolio />
          )}

        {!resumeSelected ? (
            <>
              <div />
            </>
          ) : (
              <Resume />
          )}        

      </main>
      
      <Footer />    
      
    </Container>
  );
}

export default App;
