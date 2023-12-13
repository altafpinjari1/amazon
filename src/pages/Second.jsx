import React, { useState } from "react";
import "../style/second.css";
import Header from "../header/Header";
import poster from '../assets/3ediots.png';
import Third from "./Third";



const Second = () => {
    const [showAllCards, setShowAllCards] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
  
    const generateCards = () => {
      const cards = [];
      for (let i = 1; i <= 100; i++) {
        cards.push(<div key={i} className="card">{`Card ${i}`}</div>);
      }
      return cards;
    };
  
    const cardsToShow = showAllCards
      ? generateCards()
      : generateCards().slice(startIndex, startIndex + 6);
  
    const showNextCards = () => {
      if (startIndex + 6 < 100) {
        setStartIndex((prevIndex) => prevIndex + 6);
      }
    };
  
    const showPreviousCards = () => {
      if (startIndex - 6 >= 0) {
        setStartIndex((prevIndex) => prevIndex - 6);
      }
    };
  
    const handleSeeMore = () => {
      setShowAllCards(true);
    };
  
    const handleShowLess = () => {
      setShowAllCards(false);
    };
    return (
        <div className="main-homepage2">
        <div className="inner-homepage">
          <div className="feature">
            <h1>Best of 2023: Podcasts</h1>
            <div className="horizontal-scroll">
              {!showAllCards && (
                <span onClick={showPreviousCards} className="arrow-button" id="left">
                  &#60;
                </span>
              )}
              {!showAllCards && (
                <span onClick={showNextCards} className="arrow-button" id="right">
                  &#62;
                </span>
              )}
            </div>
            {cardsToShow.map((card, index) => (
            
              <div key={index} className="card-container">
                {/* {card} */}
                <img src={poster} alt="" className="poster" />
                <span style={{color:'white',fontSize:'1.2em'}} className="title">Lorem, ipsum dolor.</span>
                <p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur...</p>
              </div>
              
            ))}
            {!showAllCards && (
              <button onClick={handleSeeMore} className="see-more-button">
                SEE ALL
              </button>
            )}
            {showAllCards && (
              <button onClick={handleShowLess} className="show-less-button">
                Show Less
              </button>
            )}
          </div>
        </div>
        <Third />
      </div>
    );
};

export default Second;






 