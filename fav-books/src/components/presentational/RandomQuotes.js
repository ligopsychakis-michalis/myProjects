import React,{useState,useEffect} from 'react';
let quotes = require('../../quotes.json');


function RandomQuotes(){
    const [quoteInd, setQuoteInd] = useState(null);

    useEffect(() => {
        const random = Math.round(Math.random() * 29);
        setQuoteInd(random);
    }, []);

    function handleClick(){
        const random = Math.round(Math.random() * 29);
        setQuoteInd(random);
        console.log(random);
    };

    return (
        <div className="random-quotes">
            {quoteInd != null ? 
                <div className="quote">
                    <p>"{quotes[quoteInd].quote}"</p>
                    <small>- {quotes[quoteInd].author}</small>
                    <button onClick={handleClick}>New Quote</button>
                </div> 
            : ""}
        </div>
    );
};

export default RandomQuotes;