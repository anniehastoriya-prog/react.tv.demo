import "./shows.css";
import { useState } from "react";
import EpisodeList from "../epsisodes.EpisodeList";
import EpisodeDetails from "../episode/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p> className="show-details "Please select a show</p>;
  }
  return (
  <div className="show-details">
    <EpisodeList
    name={show.name}
    episodes={show.episodes}
    selectedEpisode={selectedEpisode}
    setSelectedEpisode={setSelectedEpisode}
    />
    <EpisodeDetails episode= {setSelectedEpisode} />
    
  </div>;
  );
}
