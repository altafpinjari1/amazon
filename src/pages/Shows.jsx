import React from 'react';
import '../style/shows.css';
import { Link } from 'react-router-dom';

const Shows = () => {
    return (
        <div className='main-shows'>
        <table>
            <tr>
            <tr>
                <Link to="/latest"><td className='td'>LATEST</td></Link>
                <Link to="/shows"><td className='td'>SHOWS</td></Link>
                <Link to="/playlists"><td className='td'>PLAYLIST</td></Link>
            </tr>
            </tr>
        </table>
<h1>Shows</h1>
{/* <p>Shows you love. Start following your favourite shows and always find them here.</p> */}
    </div>
    );
};

export default Shows;






       



