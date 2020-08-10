import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Michel Houellebecq"
      directorWiki="https://www.wikiwand.com/en/Michel_Houellebecq"
      films={[
        {
          title: 'Whatever',
          desc: (
            <span>
              Whatever (French: Extension du domaine de la lutte, literally
              "extension of the domain of struggle") is the debut novel of
              French writer Michel Houellebecq, which was published in 1994 in
              France by Éditions Maurice Nadeau and in 1998 in the UK by
              Serpent's Tail. It primarily highlights the "disaggregating
              effects of post-Fordism on the intimate spaces of human affect"
              through the story of a depressed and isolated man stuck in a
              tedious but well-paying programming job. It was adapted into the
              1999 film Whatever, directed by and starring Philippe Harel.
              <br />
              <br />
              Just thirty, with a well-paid job, depression and no love life,
              the narrator and anti-hero par excellence of this grim, funny, and
              clever novel smokes four packs of cigarettes a day and writes
              weird animal stories in his spare time. A painfully realistic
              portrayal of the vanishing freedom of a world governed by science
              and by the empty rituals of daily life.
            </span>
          ),
          cover: '/img/books/hou/ex.jpg',
        },

        {
          title: 'Atomised',
          desc: (
            <span>
              Atomised, also known as The Elementary Particles (French: Les
              Particules élémentaires), is a novel by the French author Michel
              Houellebecq, published in France in 1998. It tells the story of
              two half-brothers, Michel and Bruno, and their mental struggles
              against their situations in modern society. It was translated into
              English by Frank Wynne as Atomised in the UK and as The Elementary
              Particles in the US. It won the International Dublin Literary
              Award for writer and translator.
              <br />
              <br />
              Half-brothers Michel and Bruno have a mother in common but little
              else. Michel is a molecular biologist, a thinker and idealist, a
              man with no erotic life to speak of and little in the way of human
              society. Bruno, by contrast, is a libertine, though more in theory
              than in practice, his endless lust is all too rarely reciprocated.
              Both are symptomatic members of our atomised society, where
              religion has given way to shallow 'new age' philosophies and love
              to meaningless sexual connections. Atomised (Les Particules
              elementaires) tells the stories of the two brothers, but the real
              subject of the novel is in its dismantling of contemporary society
              and its assumptions, in its political incorrectness, and its
              caustic and penetrating asides on everything from anthropology to
              the problem pages of girls' magazines. A dissection of modern
              lives and loves. By turns funny, acid, infuriating, didactic,
              touching and visceral.
            </span>
          ),
          cover: '/img/books/hou/el.jpg',
        },

        {
          title: 'The Possibility of an Island',
          desc: (
            <span>
              The Possibility of an Island (French: La Possibilité d'une île) is
              a 2005 novel by French novelist Michel Houellebecq, set within a
              cloning cult that resembles the real-world Raëlians.
              <br />
              <br />
              Daniel is a successful comedian who can't seem to enjoy life
              despite his wealth. He gets bored with his hedonist lifestyle, but
              can't escape from it either. In the meanwhile he is disgruntled
              with the state of current society, and philosophizes about the
              nature of sex and love. His two clones live an uneventful life as
              hermits, in a post-apocalyptic future. They live in a time where
              the human species is on its last legs (or, alternatively, on its
              first legs, as they have returned to societies of hunter-gatherer
              tribes), destroyed by climate change and nuclear war. The two
              clones are confronted with the life of the first Daniel and have
              different views about their predecessor. Scattered around are the
              remnants of tourist resorts, cities and consumer items and some
              natural humans living in small tribes without any knowledge of the
              past or of civilization.
            </span>
          ),
          cover: '/img/books/hou/is.jpg',
        },

        {
          title: 'The Map and the Territory',
          desc: (
            <span>
              The Map and the Territory (French: La carte et le territoire) is a
              novel by French author Michel Houellebecq. The narrative revolves
              around a successful artist, and involves a fictional murder of
              Houellebecq. It was published on 4 September 2010 by Flammarion
              and received the Prix Goncourt, the most prestigious French
              literary prize, in 2010. The title is a direct quote from Jean
              Baudrillard's text "Simulacra and Simulation", which itself refers
              to the Jorge Luis Borges short story "On Exactitude in Science".
              <br />
              <br />
              The novel tells the story of the life and art of Jed Martin, a
              fictional French artist who becomes famous by photographing
              Michelin maps and painting scenes about professional activities.
              His father is slowly entering old age. Jed falls for a beautiful
              Russian executive from Michelin but the relationship ends when she
              returns to Russia. Jed becomes extraordinarily successful after a
              new series of paintings and therefore suddenly rich as the most
              prominent artist in France around the year 2010. He meets Michel
              Houellebecq in Ireland in order to ask him to write the text for
              the catalog of one of his exhibitions, and in exchange offers to
              paint the writer's portrait. A few months later Houellebecq is
              brutally murdered and Jed Martin gets involved in the case.
            </span>
          ),
          cover: '/img/books/hou/ma.jpg',
        },
      ]}
    />
  );
};

export default King;
