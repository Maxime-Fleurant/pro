import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Federico Fellini"
      directorWiki="https://www.wikiwand.com/en/Federico_Fellini"
      films={[
        {
          title: 'La strada',
          desc: (
            <span>
              La strada (lit. '"The Road"') is a 1954 Italian drama film
              directed by Federico Fellini from his own screenplay co-written
              with Tullio Pinelli and Ennio Flaiano. The film tells the story of
              Gelsomina, a simple-minded young woman (Giulietta Masina) bought
              from her mother by Zampanò (Anthony Quinn), a brutish strongman
              who takes her with him on the road.
              <br />
              <br />
              Fellini has called La Strada "a complete catalogue of my entire
              mythological world, a dangerous representation of my identity that
              was undertaken with no precedent whatsoever." As a result, the
              film demanded more time and effort than any of his other works,
              before or since. The development process was long and tortuous;
              there were various problems during production, including insecure
              financial backing, problematic casting, and numerous delays.
              Finally, just before the production completed shooting, Fellini
              suffered a nervous breakdown that required medical treatment so he
              could complete principal photography. Initial critical reaction
              was harsh, and the film's screening at the Venice Film Festival
              was the occasion of a bitter controversy that escalated into a
              public brawl between Fellini's supporters and detractors.
            </span>
          ),
          screen1: '/img/cinema/fellini/strada/screen1.jpg',
          screen2: '/img/cinema/fellini/strada/screen2.jpg',
          videoId: 'CucHyXsxCU8',
          cover: '/img/cinema/fellini/strada/cover.jpg',
        },
        {
          title: 'La Dolce Vita',
          desc: (
            <span>
              La Dolce Vita is a 1960 comedy-drama film directed and co-written
              by Federico Fellini. The film follows Marcello Rubini (Marcello
              Mastroianni), a journalist writing for gossip magazines, over
              seven days and nights on his journey through the "sweet life" of
              Rome in a fruitless search for love and happiness. The screenplay,
              co-written by Fellini and three other screenwriters, can be
              divided into a prologue, seven major episodes interrupted by an
              intermezzo, and an epilogue, according to the most common
              interpretation.
              <br />
              <br />
              By the most common interpretation of the storyline, the film can
              be divided into a prologue, seven major episodes interrupted by an
              intermezzo, and an epilogue (see also Structure, below). If the
              evenings of each episode were joined with the morning of the
              respective preceding episode together as a day, they would form
              seven consecutive days, which may not necessarily be the case.
            </span>
          ),
          screen1: '/img/cinema/fellini/vita/screen1.jpg',
          screen2: '/img/cinema/fellini/vita/screen2.jpg',
          videoId: 'Nnh6NWlOF1U',
          cover: '/img/cinema/fellini/vita/cover.jpg',
        },

        {
          title: '8½',
          desc: (
            <span>
              8 1⁄2 is a 1963 Italian surrealist comedy-drama film directed by
              Federico Fellini and co-scripted by Fellini, Tullio Pinelli, Ennio
              Flaiano, and Brunello Rondi. It stars Marcello Mastroianni as
              Guido Anselmi, a famous Italian film director who suffers from
              stifled creativity as he attempts to direct an epic science
              fiction film. It is shot in black and white by cinematographer
              Gianni Di Venanzo and features a soundtrack by Nino Rota, with
              costume and set designs by Piero Gherardi.
              <br />
              <br />
              Guido Anselmi (Marcello Mastroianni), a famous Italian film
              director, is suffering from "director's block". Stalled on his new
              science fiction film that includes thinly veiled autobiographical
              references, he has lost interest amidst artistic and marital
              difficulties. While attempting to recover from his anxieties at a
              luxurious spa, Guido hires a well-known critic (Jean Rougeul) to
              review his ideas for his film, but the critic blasts them as weak,
              intellectually spineless, and confusing. Meanwhile, Guido has
              recurring visions of an Ideal Woman (Claudia Cardinale), which he
              sees as key to his story. His vivacious mistress Carla (Sandra
              Milo) comes from Rome to visit him, but Guido puts her in a
              separate hotel and mostly ignores her. The film production crew
              relocates to Guido's hotel in an attempt to get him to work on the
              film, but he evades his staff, ignores journalists, and refuses to
              make decisions, not even telling actors their roles. As the
              pressure mounts to begin filming, Guido retreats into childhood
              memories: spending the night at his grandmother's villa, dancing
              with a prostitute (Eddra Gale) on the beach as a schoolboy, and
              being punished by his strict Catholic school as a result. The film
              critic claims that these memories are too sentimental and
              ambiguous to be used in Guido's film.
            </span>
          ),
          screen1: '/img/cinema/fellini/half/screen1.jpg',
          screen2: '/img/cinema/fellini/half/screen2.jpg',
          videoId: '6TsElhgMeXE',
          cover: '/img/cinema/fellini/half/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
