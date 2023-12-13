import React from 'react';
import '../style/latest.css';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='main-latest'>
            <table>
            <tr>
                <Link to="/latest"><td className='td'>LATEST</td></Link>
                <Link to="/shows"><td className='td'>SHOWS</td></Link>
                <Link to="/playlists"><td className='td'>PLAYLIST</td></Link>
            </tr>
            </table>
<h1>LATEST</h1>
{/* <p>Follow your favourite podcasts, and come back here for the latest episodes.</p> */}
        </div>
    );
};

export default Latest;