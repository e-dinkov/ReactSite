
import useRequest from "../../hooks/useRequest";
import WatchCard from "../watch-card/WatchCard";
// import {  useState } from "react";

export default function Catalog() {
  const { data: watches } = useRequest("/data/watches", []);
  // const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //     fetch(`${import.meta.env.VITE_APP_SERVER_URL}/data/games`)
  //         .then(res => res.json())
  //         .then(result => {
  //             setGames(result);
  //         })
  // }, []);

  return (
    <section id="catalog-page">

      {watches.length === 0 && (
        <h3 className="no-articles">No Added Games Yet</h3>
      )}

      <div className="catalog-container">
        {watches.map((watch) => (
          <WatchCard key={watch._id} {...watch} />
        ))}
      </div>
    </section>
  );
}
