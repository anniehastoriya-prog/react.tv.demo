// state
// shows - in shows it holds the full list of tv shows. its loaded from from the tvShows data.
//selectedShow - this tracks whichever show the user has currently picked.

import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();
  // shows the title app with the <header></>header> element.
  //ShowSelction is the list where the user will pick a show.
  // <main> has the ShowDetails which will display infomation about the selected show.
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>

      <main>
        <ShowDetails key={selectedShow?.name} show={selectedShow} />
      </main>
    </>
  );
}
