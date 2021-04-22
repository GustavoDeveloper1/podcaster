import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


import Styles from './styles.module.scss';

export function Player() {

    return (
        <div className={Styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando Agora</strong>
            </header>

            <div className={Styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

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
                        <img src="/play.svg" alt="Tocar"/>
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