import React, { useContext } from "react";
import { MixTapeContext } from "./MixTapeContext";

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixTapeContext);
  return (
    <div className="controls">
      {/* TODO: add some controls! */}
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="hip hop">Hip Hop</option>
        <option value="rap">Rap</option>
        <option value="rock">rock</option>
        <option value="pop">Pop</option>
      </select>
      <button
        onClick={() =>
          setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
        }
      >
        Sort: {sortOrder}
      </button>
    </div>
  );
};
