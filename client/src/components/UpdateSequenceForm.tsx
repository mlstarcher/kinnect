import React, { useState, useEffect } from "react";

export default function UpdateSequenceForm({ socket, currentSequenceDetails }) {
  const [tempo, setTempo] = useState(currentSequenceDetails.tempo);

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
        min="50"
        max="160"
        placeholder={currentSequenceDetails.tempo}
        onChange={(e) => setTempo(Number(e.target.value))}
      ></input>
      <br/>
      <button onClick={(e) => handleTempoClick(e)}>Update Tempo</button>
    </form>
  );
}
