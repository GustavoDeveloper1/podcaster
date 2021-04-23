import { GetStaticProps } from 'next';
import Image from 'next/image';

import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { api } from '../services/api';
import { convertDurationToTimeSting } from '../utils/ConvertDurationToTImeString';

import Styles from './home.module.scss';


type Episodes = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  description: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;

}


type HomeProps = {
  latesEpisodes: Episodes[];
  allEpisode: Episodes[];
}



export default function Home({ allEpisode, latesEpisodes }: HomeProps) {

  return (
    <div className={Styles.homepage}>
      <section className={Styles.latesEpisodes}>
        <h2>Últimos lançamentos</h2>
        <ul>
          {
            latesEpisodes.map(episode => {
              return (
                <li key={episode.id}>
                  <Image width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover" />

                  <div className={Styles.episodeDetails}>
                    <a href="">{episode.title}</a>
                    <p>{episode.members}</p>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                  </div>

                  <button type="button">
                    <img src="/play-green.svg" alt="Tocar Episodio" />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>

      <section className={Styles.allEpisodes}>
          <h2>Todos os Episódios</h2>

          

      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeSting(Number(episode.file.duration)),
      decription: episode.description,
      url: episode.file.url,
    }
  });

  const latesEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latesEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  }
}


