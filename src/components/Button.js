import "./Button.css";

const Button = ({ symbol, bgcolor, color, handleClick }) => {
    return (
        <button 
        className="button-wrapper" 
        style={{ backgroundColor: bgcolor, color: color }}
        onClick={() => handleClick(symbol)}
        >
            { symbol }
        </button>
    );
}

export default Button;