import React, { useContext } from "react";
import { MixTapeContext } from "./MixTapeContext";
import { Song } from "./Song";

export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixTapeContext);

  let filteredSongs =
    genre === "all" ? songs : songs.filter((song) => song.genre === genre);

  let sortedSongs = [...filteredSongs].sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.year - b.year;
    } else {
      return b.year - a.year;
    }
  });
  return (
    <>
      <h2>Songs</h2>
      <ul>
        {sortedSongs.map((song, index) => (
          <Song {...song} key={song.name} />
        ))}
      </ul>
    </>
  );
};
