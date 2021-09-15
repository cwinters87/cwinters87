import './style.css'

function Portfolio(props) {
    return (
        <div className="portfolio-div">            
            <h1 className="title">My Work</h1>
            <div className="wrapper">{props.children}</div>
        </div>
    )
}

export default Portfolio

