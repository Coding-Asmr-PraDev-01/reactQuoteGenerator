import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./Quote";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[0]);
      })
      .then(err => {
        console.log(err);
      });
  }, []);

  const generateQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="App">
      <div className="quoteBx">
        <h1>Quotes Generator</h1>
        <Quote quote={quote} generateQuote={generateQuote} />
      </div>
    </div>
  );
}
