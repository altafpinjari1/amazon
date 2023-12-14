import React from 'react';
import '../style/playlists.css';
import { Link } from 'react-router-dom';

const Playlists = () => {
    return (
        <div className='main-playlist'>
        <table>
            <tr>
                <Link to="/latest"><td className='td'>LATEST</td></Link>
                <Link to="/shows"><td className='td'>SHOWS</td></Link>
                <Link to="/playlists"><td className='td'>PLAYLIST</td></Link>
            </tr>
        </table>
<h1>Playlist</h1>
<p>Listen later. Add episodes to your playlist and always find them here.</p>
    </div>
    );
};
export default Playlists;