import React, { useState } from 'react';
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
  
  
  
  

  const [testState, setTestState] = useState(false);
  console.log(`testState is ${testState}`)

  // const [pages] = useState([
  //   {
  //     name: 'AboutMe',
  //     description: '',
  //   },
  //   { name: 'Portfolio',
  //     description: '' 
  //   },
  //   { name: 'Resume', 
  //     description: '' 
  //   },
  //   { name: 'ContactMe', 
  //     description: ''
  //   },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header
        aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}        
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}        
        testState={testState}
        setTestState={setTestState}
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
        
        <Footer />  
      </main>   
      

    </div>
  );
}

export default App;
