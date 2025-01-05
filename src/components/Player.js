import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enterdPlayerName, setEnterdPlayerName] = useState(null);

  function handleClick() {
    setEnterdPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section className="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
