import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Players from "./Players";

const baseURL = "https://indian-team-ah03xemy4-shekhar-ranjans-projects.vercel.app/api/superhero";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      return null;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="w-full flex justify-center items-center">
      {players.length > 0 ? (
        <div className="w-full flex justify-center items-center">
          <Players players={players} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
