import '../styles/global.scss';


import { Header } from '../components/Header/header';
import { Player } from '../components/Player/player';

import Styles from '../styles/app.module.scss';
import { PlayerContext } from '../Contexts/PlayerContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);

  }

  return (

    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex ,play}}>
      <div className={Styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
