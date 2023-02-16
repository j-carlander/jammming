import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track";

export function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            onRemove={props.onRemove}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
          />
        );
      })}
    </div>
  );
}
