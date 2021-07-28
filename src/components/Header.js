import Navigation from './Navigation'

function Header({ 
    aboutMeSelected, 
    setAboutMeSelected, 
    portfolioSelected, 
    setPortfolioSelected, 
    contactSelected, 
    setContactSelected, 
    resumeSelected, 
    setResumeSelected, 
    testState, 
    setTestState 
    }) 
    {
    // console.log(`testState is ${testState}`)
    
    return (
        <div>
            <h1>This is the header</h1>        
            <Navigation 
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
            />
        </div>
    )
}

export default Header
