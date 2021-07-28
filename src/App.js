import React, { useState } from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header />
      <main>

        {!contactSelected ? (
            <>
              <AboutMe />
            </>
          ) : (
            <ContactMe />
          )}

        {!portfolioSelected ? (
            <>
              <AboutMe />
            </>
          ) : (
              <Portfolio />
          )}

        {!resumeSelected ? (
            <>
              <AboutMe />
            </>
          ) : (
              <Resume />
          )}
        
        <Footer />  
      </main>   
      

    </div>
  );
}

export default App;
