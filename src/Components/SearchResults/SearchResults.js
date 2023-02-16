import React from "react";
import { TrackList } from "../TrackList/TrackList";
import "./SearchResults.css";

export function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResult}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
}
