import { FunctionComponent } from 'react';

import FilmArticle from '../../../common/components/FilmArcticle';

const Carax: FunctionComponent = () => {
  return (
    <FilmArticle
      director="Rainer Werner Fassbinder"
      directorWiki="https://www.wikiwand.com/en/Rainer_Werner_Fassbinder"
      films={[
        {
          title: 'Love is Colder',
          desc: (
            <span>
              Love is Colder Than Death (German: Liebe ist kälter als der Tod)
              is a 1969 West German black-and-white film directed by Rainer
              Werner Fassbinder, his first feature film. In the original theater
              presentation in Berlin the title was first Kälter als der Tod; at
              the beginning of film production, it was Liebe – kälter als der
              Tod as on some film posters. The cinematographer Dietrich Lohmann
              and the cast as an ensemble won an award at the German Film Awards
              in 1970.
              <br />
              <br />
              Petty hood Franz (Fassbinder) refuses to join the syndicate, where
              he meets a handsome young thug called Bruno (Lommel) and gives him
              his address in Munich. It is the flat of the prostitute Joanna
              (Schygulla), where Franz lives as her pimp. Bruno has been ordered
              by the syndicate to follow Franz and on going to the address is
              told he has moved. So he goes round the streets of the city asking
              prostitutes if they know a whore called Joanna.
            </span>
          ),
          screen1: '/img/cinema/fass/love/screen1.jpg',
          screen2: '/img/cinema/fass/love/screen2.jpg',
          videoId: '3CLq43MSRaI',
          cover: '/img/cinema/fass/love/cover.jpg',
        },
        {
          title: 'Beware of a Holy Whore',
          desc: (
            <span>
              Beware of a Holy Whore (German: Warnung vor einer heiligen Nutte)
              is a 1971 West German drama film written and directed by Rainer
              Werner Fassbinder that features Lou Castel, Eddie Constantine,
              Hanna Schygulla and Fassbinder himself.
              <br />
              <br />
              While in a hotel with too much drink, drugs and time the cast and
              crew of a film are gradually unravelling as they await the arrival
              of their director. Semi-autobiographical, the film was influenced
              by the shooting of the director's earlier Whity in Spain. The film
              features music from Leonard Cohen's first album Songs of Leonard
              Cohen and from Spooky Two by Spooky Tooth, among others.
            </span>
          ),
          screen1: '/img/cinema/fass/holy/screen1.jpg',
          screen2: '/img/cinema/fass/holy/screen2.jpg',
          videoId: 'GlCb_XDXC0Q',
          cover: '/img/cinema/fass/holy/cover.jpeg',
        },

        {
          title: 'The Bitter Tears of Petra von Kant',
          desc: (
            <span>
              The Bitter Tears of Petra von Kant (German: Die bitteren Tränen
              der Petra von Kant) is a 1972 West German film directed by Rainer
              Werner Fassbinder, based on his own play. The film has an
              all-female cast, and it is set in the home of the narcissistic
              protagonist Petra von Kant. It follows the changing dynamics in
              her relationships with the other women. Petra's story is told in a
              theater-like fashion in four different acts, each depicting the
              states of mind of the main character hinted visually by her
              clothes and hair. The film was entered into the 22nd Berlin
              International Film Festival.
              <br />
              <br />
              Petra von Kant (Carstensen) is a prominent fashion designer based
              in Bremen. The film is almost totally restricted to her
              apartment's bedroom, decorated by a huge reproduction of Poussin's
              Midas and Bacchus (c.1630), which depicts naked and partially
              clothed men and women. The room also contains numerous life-size
              mannequins for her work, though only her assistant Marlene
              (Hermann) is shown using them. Petra's marriages have ended in
              death or divorce. Her first husband Pierre was a great love, who
              died in a car accident while Petra was pregnant; the second began
              the same way, but ended in disgust. Petra lives with Marlene,
              another designer, whom she treats as a slave, and this
              relationship reveals Petra's sadistic, codependent tendencies.
            </span>
          ),
          screen1: '/img/cinema/fass/bitter/screen1.jpg',
          screen2: '/img/cinema/fass/bitter/screen2.jpg',
          videoId: 'eq0w_XsEAAU',
          cover: '/img/cinema/fass/bitter/cover.jpg',
        },
      ]}
    />
  );
};

export default Carax;
