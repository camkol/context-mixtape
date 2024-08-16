import React, { useState } from "react";

export const MixTapeContext = React.createContext();

export const MixTapeProvider = ({ children, songs }) => {
  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <MixTapeContext.Provider
      value={{ songs, genre, setGenre, sortOrder, setSortOrder }}
    >
      {children}
    </MixTapeContext.Provider>
  );
};
