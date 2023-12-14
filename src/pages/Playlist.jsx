import React from 'react';
import '../style/playlist.css';


const Playlist = () => {
    return (
        <div className='play-list'>
            <span>Playlists</span>
            <button className='playlist-create'>+ Create Playlist</button>
            <p className='p-playlists'>Add songs you like and they will show up here</p>
        </div>
    );
};

export default Playlist;