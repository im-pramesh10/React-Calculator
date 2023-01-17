import "./Display.css" 

const Display = ({ result, expression }) => {
    return(
        <div className="Display-wrapper">
            <div className="result">
                <h1>
                   { result }
                </h1>
            </div>
            <div className="expression">
                <h3>
                   { expression }
                </h3>
            </div>
        </div>
    );
}

export default Display;