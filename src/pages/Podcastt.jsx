import React from "react";
import "../style/podcasts.css";
import { Link } from "react-router-dom";

const Podcasts = () => {
  return (
    <div className="main-podcasts">
      <span>Find Podcasts in</span>
      <div className="buttons">
        <Link to="/hundred">
          <button className="buttn">Sports</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">News</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Comedy</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">Music</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">True Crime</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">Business</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Health & Fitness</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">Technology</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Government</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">TV & Film</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Educational</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">Society & Culture</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Kids & Family</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">Religion & Spirituality</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Science</button>
        </Link>
        <Link to="/hundred">
          <button className="buttn">History</button>
        </Link>
        <Link to="/hund">
          <button className="buttn">Leisure</button>
        </Link>
      </div>
    </div>
  );
};

export default Podcasts;
