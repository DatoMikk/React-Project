import { useState } from "react";
import PlayerCard from "./components/PlayerCard";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const players = [
    { name: "კვარაცხელია", goals: 30, position: "თავდამსხმელი" },
    { name: "მესი", goals: 35, position: "თავდამსხმელი" },
    { name: "ვიტინია", goals: 12, position: "ნახევარმცველი" },
    { name: "კაშია", goals: 1, position: "მცველი" },
    { name: "მამარდაშვილი", goals: 0, position: "მეკარე" }
  ];

  const addToFavorites = (player) => {
    const exist = favorites.some((p) => p.name === player.name);

    if(!exist){
      setFavorites([...favorites, player]);
    }
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  const del = (playerName) => {
    setFavorites(
      favorites.filter(
        (player) => player.name !== playerName
      )
    );
  };

  return (
    <div>
      <h1>საფეხბურთო სტატისტიკა</h1>

      <input
        type="text"
        placeholder="მოძებნე ფეხბურთელი..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPlayers.map((player, index) => (
        <PlayerCard
          key={index}
          name={player.name}
          goals={player.goals}
          position={player.position}
          onAdd={() => addToFavorites(player)}
        />
      ))}

      <h2>შენი ფავორიტი ფეხბურთელები</h2>

      {favorites.map((player, index) => (
        <div key={index}>
          {player.name} - {player.goals} goals
          <button onClick={() => del(player.name)}>წაშალე ფავორიტებიდან</button>
        </div>
      ))}
    </div>
  );
}

export default App;