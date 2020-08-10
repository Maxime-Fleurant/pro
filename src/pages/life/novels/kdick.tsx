import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Philip K. Dick"
      directorWiki="https://www.wikiwand.com/en/Philip_K._Dick"
      films={[
        {
          title: 'The Man in the High Castle',
          desc: (
            <span>
              The Man in the High Castle is an alternate history novel by
              American writer Philip K. Dick. Published and set in 1962, the
              novel takes place fifteen years after a different end to World War
              II, and depicts intrigues between the victorious Axis
              Powers—primarily, Imperial Japan and Nazi Germany—as they rule
              over the former United States, as well as daily life under
              totalitarian rule.
              <br />
              <br />
              It's America in 1962. Slavery is legal once again. The few Jews
              who still survive hide under assumed names. In San Francisco, the
              I Ching is as common as the Yellow Pages. All because some twenty
              years earlier the United States lost a war — and is now occupied
              by Nazi Germany and Japan.
            </span>
          ),
          cover: '/img/books/dick/man.jpg',
        },

        {
          title: 'Ubik',
          desc: (
            <span>
              Ubik (/ˈjuːbɪk/ YOO-bik) is a 1969 science fiction novel by
              American writer Philip K. Dick. The story is set in a future 1992
              where psychic powers are utilized in corporate espionage, while
              intricate technologies allow recently deceased people to be
              maintained in a lengthy state of hibernation. It follows Joe Chip,
              a technician at a psychic agency who, after an assassination
              attempt, begins to experience strange alterations in reality that
              can be temporarily reversed by a mysterious store-bought substance
              called Ubik.
              <br />
              <br />
              Glen Runciter runs a lucrative business—deploying his teams of
              anti-psychics to corporate clients who want privacy and security
              from psychic spies. But when he and his top team are ambushed by a
              rival, he is gravely injured and placed in “half-life,” a
              dreamlike state of suspended animation. Soon, though, the
              surviving members of the team begin experiencing some strange
              phenomena, such as Runciter’s face appearing on coins and the
              world seeming to move backward in time. As consumables deteriorate
              and technology gets ever more primitive, the group needs to find
              out what is causing the shifts and what a mysterious product
              called Ubik has to do with it all.
            </span>
          ),
          cover: '/img/books/dick/ubik.jpg',
        },
      ]}
    />
  );
};

export default King;
