import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Robert Bresson"
      directorWiki="https://www.wikiwand.com/en/Robert_Bresson"
      films={[
        {
          title: 'A Man Escaped',
          desc: (
            <span>
              A Man Escaped or: The Wind Bloweth Where It Listeth (French: Un
              condamné à mort s'est échappé ou Le vent souffle où il veut) is a
              1956 French film directed by Robert Bresson. It is based on the
              memoirs of André Devigny, a member of the French Resistance held
              in Montluc prison by the occupying Germans during World War II.
              The protagonist of the film is called Fontaine. Bresson himself
              was imprisoned by the Germans as a member of the French
              Resistance. The second part of the title comes from the Bible
              (John 3:8).
              <br />
              <br />
              On the way to jail, Fontaine (François Leterrier), a member of the
              French Resistance, seizes an opportunity to escape his German
              captors when the car carrying him is forced to stop, but he is
              soon apprehended, beaten for his attempt, handcuffed and taken to
              the jail. At first he is incarcerated in a cell on the first floor
              of the prison, and he is able to talk to three French men who are
              exercising in the courtyard. The men obtain a safety pin for
              Fontaine, which gives him the ability to unlock his handcuffs.
              This turns out to be needless as a means to help him with any
              escape plans he may already have, but it allows him at will, to
              remove the handcuffs which are kept on him 24 hours a day. He
              eventually gives his word parole to the German magistrate he is
              brought before, not to escape, and is moved to a cell on the top
              floor without handcuffs.
            </span>
          ),
          screen1: '/img/cinema/bresson/man/screen1.jpg',
          screen2: '/img/cinema/bresson/man/screen2.jpg',
          videoId: 'oMjhwMmMMD4',
          cover: '/img/cinema/bresson/man/cover.jpg',
        },
        {
          title: 'Pickpocket',
          desc: (
            <span>
              Pickpocket is a 1959 French film directed by Robert Bresson. It
              stars the young Uruguayan Martin LaSalle, who was a
              nonprofessional actor at the time, in the title role, with Marika
              Green. It was the first film for which Bresson wrote an original
              screenplay rather than "adapting it from an existing text."
              <br />
              <br />
              Michel (Martin LaSalle) goes to a horse race and steals some money
              from a spectator. He leaves the racetrack confident that he was
              not caught when he is suddenly arrested. The inspector (Jean
              Pélégri) releases Michel because the evidence is not strong
              enough. Michel soon falls in with a small group of professional
              pickpockets who teach him their trade and invite him to join them
              on highly coordinated pickpocketing sprees in crowded public
              areas.
            </span>
          ),
          screen1: '/img/cinema/bresson/pick/screen1.jpg',
          screen2: '/img/cinema/bresson/pick/screen2.jpeg',
          videoId: 'sKwRF2WGBu8',
          cover: '/img/cinema/bresson/pick/cover.jpg',
        },

        {
          title: 'Au Hasard Balthazar',
          desc: (
            <span>
              Au Hasard Balthazar , also known as Balthazar, is a 1966 French
              drama film directed by Robert Bresson. Believed to be inspired by
              a passage from Fyodor Dostoyevsky's 1868-69 novel The Idiot, the
              film follows a donkey as he is given to various owners, most of
              whom treat him callously.
              <br />
              <br />
              In the French countryside near the Pyrenees, a baby donkey is
              adopted by young children - Jacques and his sisters, who live on a
              farm. They baptize the donkey (and christen it Balthazar) along
              with Marie, Jacques' childhood sweetheart, whose father is the
              teacher at the small school next-door. When one of Jacques'
              sisters dies, his family vacates the farm, and Marie's family take
              it over in a loose arrangement. The donkey is given away to local
              farmhands who work it very hard. Years pass until Balthazar is
              involved in an accident and runs off, finding its way back to
              Marie, who is now a teenager. But her father gets involved in
              legal wrangles over the farm and the donkey is given away to a
              local bakery for delivery work.
            </span>
          ),
          screen1: '/img/cinema/bresson/hasard/screen1.jpg',
          screen2: '/img/cinema/bresson/hasard/screen2.jpeg',
          videoId: 'PMK7VeA0UVk',
          cover: '/img/cinema/bresson/hasard/cover.jpg',
        },

        {
          title: 'Mouchette',
          desc: (
            <span>
              Mouchette is a 1967 French film directed by Robert Bresson,
              starring Nadine Nortier and Jean-Claude Guilbert. It is based on
              the novel of the same name by Georges Bernanos. It was entered
              into the 1967 Cannes Film Festival, winning the OCIC Award
              (International Catholic Organization for Cinema and Audiovisual).
              <br />
              <br />A coming-of-age story, Mouchette is set in a rural French
              village and follows the daughter of a bullying alcoholic father
              and ailing mother. Unfolding in the director's famously sparse and
              minimalist style, Bresson said that its titular character "offers
              evidence of misery and cruelty. She is found everywhere: wars,
              concentration camps, tortures, assassinations."
            </span>
          ),
          screen1: '/img/cinema/bresson/mouche/screen1.jpg',
          screen2: '/img/cinema/bresson/mouche/screen2.jpg',
          videoId: '6g2hpyzVmhA',
          cover: '/img/cinema/bresson/mouche/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
