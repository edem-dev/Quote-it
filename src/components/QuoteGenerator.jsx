import React from 'react';
import {useEffect,useState} from "react";

const QuoteGenerator = () => {
    const [quote , setQuote] =useState({})
    const [loading , setLoading] =useState(true)

    const fetchQuote = async ()=>{
        setLoading(true);
        try{
            const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: {
                    'X-Api-Key': 'ekmZxZe2dAxF6XG/Bud5Tw==Fp3GcUGIi00Yj8jc\n'
                }
            });
            const data = await response.json();
            setQuote(data[0]);
        }catch (error){
            console.error("Failed to get the quote:",error)
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchQuote();
    }, []);


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fefcd7] px-4">
            <div className={"text-center max-w-sm w-full"}>
                <h2 className={"text-4xl font-bold mb-6"}>
                    Quote <span className={"text-fuchsia-600"}>it</span>
                </h2>
                <div className={"bg-pink-200 border-3 border-black rounded-2xl p-6 shadow-md  flex flex-col items-start justify-start"}>
                    <span className="inline-block bg-black text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            Quote
          </span>

                { loading ? (
                    <p>Loading...</p>
                ):(
                    quote && (<blockquote className={"text-gray-800 text-md mb-6 leading-relaxed al"}>
                        "{quote.quote}"
                        <br/>
                        <cite className={"text-gray-600 text-right w-full italic"}>-{quote.author}</cite>

                    </blockquote>)
                )}
            <button className={"mt-6 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-full w-full"} onClick={fetchQuote}>Next Quote</button>
            </div>


            </div>
        </div>
    );
};

export default QuoteGenerator;
