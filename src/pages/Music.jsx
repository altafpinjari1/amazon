import React from 'react';
import '../style/music.css';
import { Link } from 'react-router-dom';

const Music = () => {
    return (
        <div className='main-music'>
            <span>Library</span>
            <div className="butn-container">
           <Link to="/latest"><button className='buttn'>Podcasts</button></Link>
           <Link to="/playlist"><button className='buttn'>Playlists</button></Link>
           <Link to="/songs"> <button className='buttn'>Songs</button></Link>
           <Link to="/album"><button className='buttn'>Albums</button></Link>
           <Link to="/artist"> <button className='buttn'>Artists</button></Link>
            </div>
            <div className="inner-music">
                {/* <b>Start listening and add to your library</b>
                <p>Come back to view your history and favorites here</p> */}
                <Link to="/"><button className='buttn' id='bttn'>Explore</button></Link>
            </div>
        </div>
    );
};

export default Music;