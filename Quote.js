import React from "react";

const Quote = ({ quote, generateQuote }) => {
  return (
    <div>
      <p className="quote">
        <span>🙶</span>
        {quote?.text}
        <span>🙷</span>
      </p>
      <p className="author">- {quote?.author}</p>
      <a href="#" className="nextQuote" onClick={generateQuote}>
        Next Quote
      </a>
    </div>
  );
};

export default Quote;
