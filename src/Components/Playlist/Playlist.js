import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./Playlist.css";

export function Playlist(props) {
  function handleNameChange(e) {
    props.onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
