import React, { useState, useEffect } from "react";

export default function UpdateSequenceForm({ socket }) {
  const [tempo, setTempo] = useState();

  const handleTempoClick = (e) => {
    e.preventDefault();
    socket.emit("tempo", tempo);
  };

  return (
    <form>
      <label htmlFor="tempo"></label>
      <input
        type="number"
        id="tempo"
        onChange={(e) => setTempo(e.target.value)}
      ></input>
      <button onClick={(e) => handleTempoClick(e)}>Update Tempo</button>
    </form>
  );
}
