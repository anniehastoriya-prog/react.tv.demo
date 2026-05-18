import { useState } from "react";
import { tvShows } from "./shows/dat";
import ShowDetails from "/shows/ShowDetails";
import ShowSelection from "./shows/ShowSeletion";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useStae(tvShows);
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          show={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelctedShow}
        />
      </header>
      <main>
        <ShowDetails key={selectedshow?.name} show={selectedShow} />
      </main>
    </>
  );
}
