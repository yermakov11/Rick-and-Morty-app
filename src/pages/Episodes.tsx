import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./stylePages/EpisodesStyle.scss";
import { getDataSeasons, Episode } from "../data/apiSeasons";
import ModalInfo from "../components/ModalInfo";

export default function Episodes() {
  const [dataEpisodes, setDataEpisodes] = useState<Episode[]>([]);
  const [selectSeason, setSelectSeason] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const fetchEpisodes = async (season: number) => {
    try {
      const response = await getDataSeasons(season);
      setDataEpisodes(response);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };

  useEffect(() => {
    fetchEpisodes(selectSeason);
  }, [selectSeason]);

  const handleInfoButtonClick = (episode: Episode) => {
    setSelectedEpisode(episode);
    setModalOpen(true);
  };

  return (
    <div>
      <Header />
      <main className="main-episodes">
        <div className="choose-seasons">
          <h1>Season {selectSeason}</h1>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7].map((season) => (
              <li key={season}>
                <button className="season" onClick={() => setSelectSeason(season)}>
                  {season}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="episodes" key={selectSeason}>
          {dataEpisodes.map((episode) => (
            <div className="grid-episode" key={episode.id}>
              <div className="block-episode">
                <img src={`https://image.tmdb.org/t/p/w300${episode.still_path}`} className="img-watch" alt="error" />
                <button className="watch-btn">watch episode {episode.episode_number}</button>
                <button className="info-btn" onClick={() => handleInfoButtonClick(episode)}>get info</button>
              </div>
            </div>
          ))}
        </div>
        <ModalInfo isOpen={modalOpen} onClose={() => setModalOpen(false)} episode={selectedEpisode} />
      </main>
    </div>
  );
}
