import { useState, useEffect } from "react";
import { Episode } from "../data/apiSeasons";
import "./styleComponents/ModalInfoStyle.scss";

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
  episode: Episode | null;
}

export default function ModalInfo({isOpen,onClose,episode}: ModalInfoProps) {

  const [episodeData, setEpisodeData] = useState<Episode | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    setEpisodeData(episode);
  }, [episode]);

  
  const charactersToShow = showAll? episodeData?.guest_stars:episodeData?.guest_stars?.slice(0, 3);

  return (
    <div className={`modal-container ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>close</button>
      <h1>Episode information</h1>
      <div className="modal-content">
        {episodeData && (
          <div className="modal-list">
            <h1>Season number {episodeData.season_number}</h1>
            <p>Episode number: {episodeData.episode_number}</p>
            <p>{episodeData.overview}</p>
            <h2>Characters</h2>
            <ul>
              {[...new Set(charactersToShow?.map((guest) => guest.character)),].map((character, index) => (
                <li key={index}>{character}</li>
              ))}
            </ul>
            {(episodeData?.guest_stars?.length > 3) && (
              <>
                {!showAll ? (
                  <button onClick={() => setShowAll(true)}>load more</button>
                ) : (
                  <button onClick={() => setShowAll(false)}>load less</button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
