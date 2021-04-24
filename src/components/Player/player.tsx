import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';
import { PlayerContext } from '../../Contexts/PlayerContext';
import Image from 'next/image';

import Styles from './styles.module.scss';

export function Player() {

    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

    const episode = episodeList[currentEpisodeIndex]

    return (
        <div className={Styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando Agora </strong>
            </header>


            { episode ? (
                <div className={Styles.currentEpisode}>
                    <Image width={592} height={592} src={episode.thumbnail} objectFit="cover"/>
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={Styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}



            <footer className={Styles.empty}>
                <div className={Styles.progress}>
                    <span>00:00</span>
                    <div className={Styles.Slider}>
                        <div className={Styles.emptySlider} />
                    </div>
                    <span>00:00</span>
                </div>
                <div className={Styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar Anterior" />
                    </button>
                    <button type="button" className={Styles.playerButton}>
                        <img src="/play.svg" alt="Tocar" />
                    </button>
                    <button type="button" >
                        <img src="/play-next.svg" alt="Repetir" />
                    </button>
                    <button type="button" >
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>
            </footer>
        </div>
    );
}