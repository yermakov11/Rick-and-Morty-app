// ModalInfo.tsx
import { useState, useEffect } from "react";
import { Episode } from "../data/apiSeasons";
import './styleComponents/ModalInfoStyle.scss';

interface ModalInfoProps {
  isOpen: boolean;
  onClose: () => void;
  episode: Episode | null;
}

export default function ModalInfo({ isOpen, onClose, episode }: ModalInfoProps) {
  const [episodeData, setEpisodeData] = useState<Episode | null>(null);

  useEffect(() => {
    setEpisodeData(episode);
  }, [episode]);

  return (
    <div className={`modal-container ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>close</button>
      <h1>Modal info</h1>
      <div className="modal-content">
        {episodeData && (
          <div className="modal-list">
            <p>{episodeData.episode_number}</p>
            <p>{episodeData.overview}</p>
            <p>{episodeData.character}</p>
          </div>
        )}
      </div>
      <button>load more</button>
    </div>
  );
}
