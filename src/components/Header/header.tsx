import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


import Styles  from  './styles.module.scss';

export function Header() {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM' , { 
        locale: ptBR,
    });

    return(
        <header className={Styles.headerContainer}>
            <a href="/"><img src="/logo.svg" alt="Podcastr" /></a>

            <p>O melhor para você ouvir, Sempre!</p>

            <span> {currentDate}</span>
        </header>
    );
}