import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Homepage from "./pages/Homepage";
import Library from "./pages/Library";
import Podcasts from "./pages/Podcastt";
import Hundredcards from "./pages/Hundredcards";
import Hundcards from "./pages/Hundcards";
import Music from "./pages/Music";
import Latest from "./pages/Latest";
import Shows from "./pages/Shows";
import Playlists from "./pages/Playlists";
import Playlist from "./pages/Playlist";
import Songs from "./pages/Songs";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/music" element={<Music />}/>
            <Route path="/latest" element={<Latest />} />
          <Route path="/hundred" element={<Hundredcards />}/>
          <Route path="/hund" element={<Hundcards />}/>
          <Route path="/latest" element={<Latest />}/>
          <Route path="/shows" element={<Shows />}/>
          <Route path="/playlists" element={<Playlists />}/>
          <Route path="/playlist" element={<Playlist />}/>
          <Route path="/songs" element={<Songs />}/>
          <Route path="/album" element={<Albums />}/>
          <Route path="/artist" element={<Artists />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
