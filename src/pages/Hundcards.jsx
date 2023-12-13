import React from 'react';
import '../style/hundred.css';
import Header from '../header/Header';
import { Container } from 'react-bootstrap';
import poster from '../assets/3ediots.png';

const Hundcards = () => {
  const cardsData = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
    content: `This is the content of card ${index + 1}.`,
  }));

  return (
    <div className="main-hundred">
      <Header />
      <Container>
        <div className="card-grid">
          {cardsData.map((card) => (
            <div key={card.id}>
              <div className="card">
                <img src={poster} alt="" />
              </div>
              <div className="card-content">
                <h2 style={{fontSize:'3vh'}}>lorem ispan</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Hundcards;
