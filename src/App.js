import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Header from './components/Header/Header'
import AboutMe from './components//AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ContactMe from './components/ContactMe/ContactMe';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import Projects from './projects.json';

function App() {

  const [aboutMeSelected, setAboutMeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <Container fluid id="container">

      <Header
        setAboutMeSelected={setAboutMeSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      ></Header>

      <main className="main-div">
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
            
            <Portfolio>
                        
            {Projects.map(project => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                github={project.github}
                url={project.url}
                tech={project.tech}
              />
            ))}
          </Portfolio>
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
