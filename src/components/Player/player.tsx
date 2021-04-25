import Slider from 'rc-slider';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '../../Contexts/PlayerContext';
import Image from 'next/image';

import Styles from './styles.module.scss';
import 'rc-slider/assets/index.css';


export function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const { episodeList,
        currentEpisodeIndex,
        isPlaying,
        togglePlay } = useContext(PlayerContext);


    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        }else {
            audioRef.current.pause();
        }

    }, [isPlaying])


    const episode = episodeList[currentEpisodeIndex]

    return (

        <div className={Styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando Agora </strong>
            </header>


            { episode ? (
                <div className={Styles.currentEpisode}>
                    <Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </div>
            ) : (
                <div className={Styles.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            )}



            <footer className={!episode ? Styles.empty : ''}>
                <div className={Styles.progress}>
                    <span>00:00</span>
                    <div className={Styles.Slider}>
                        {episode ? (
                            <div>
                                <Slider
                                    trackStyle={{ backgroundColor: '#04d361' }}
                                    railStyle={{ backgroundColor: '#9f75ff' }}
                                    handleStyle={{ borderColor: '#04d361', borderWidth: '#04d361' }}
                                />
                            </div>
                        ) : (
                            <div className={Styles.emptySlider} />
                        )}
                    </div>
                    <span>00:00</span>
                </div>

                {episode && (
                    <audio
                        src={episode.url}
                        ref={audioRef}
                        autoPlay
                    />
                )}

                <div className={Styles.buttons}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/play-previous.svg" alt="Tocar Anterior" />
                    </button>
                    <button type="button"
                        className={Styles.playerButton}
                        disabled={!episode}
                        onClick={togglePlay}>
                        {isPlaying
                            ? <img src="/pause.svg" alt="Tocar" />
                            : <img src="/play.svg" alt="Tocar" />
                        }
                    </button>
                    <button type="button" disabled={!episode} >
                        <img src="/play-next.svg" alt="Repetir" />
                    </button>
                    <button type="button" disabled={!episode} >
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </div>
            </footer>
        </div>
    );
}