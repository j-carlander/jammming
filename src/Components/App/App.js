import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

const staticSearchResult = [
  { name: "Kalle", artist: "Kalle", album: "Kola", id: 1 },
  { name: "Kalle", artist: "Pelle", album: "Plutt", id: 2 },
  { name: "Kalle", artist: "Olle", album: "Sur Olle", id: 3 },
];

const staticPlaylistTracks = [
  {
    name: "Tiny Dancer",
    artist: "Elton John",
    album: "Madman Across The Water",
    id: 4,
  },
  {
    name: "Stronger",
    artist: "Britney Spears",
    album: "Oops!... I Did It Again",
    id: 5,
  },
  {
    name: "So Emotional",
    artist: "Whitney Houston",
    album: "Whitney",
    id: 6,
  },
];

function App() {
  const [searchResult, setSearchResult] = useState(staticSearchResult);
  const [playlistName, setPlaylistName] = useState();
  const [playlistTracks, setPlaylistTracks] = useState(staticPlaylistTracks);

  function addTrack(track) {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) return;

    setPlaylistTracks([...playlistTracks, track]);
  }

  function removeTrack(track) {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>

      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResult={searchResult} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
