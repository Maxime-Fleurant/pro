import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Bret Easton Ellis"
      directorWiki="https://www.wikiwand.com/en/Bret_Easton_Ellis"
      films={[
        {
          title: 'Less Than Zero',
          desc: (
            <span>
              Less Than Zero is the debut novel of Bret Easton Ellis, published
              in 1985. It was his first published effort, released when he was
              21 years old and still a student at Bennington College.
              <br />
              <br />
              Titled after the Elvis Costello song of the same name, the novel
              follows the life of Clay, a rich, young college student who has
              returned to his hometown of Los Angeles, California for winter
              break circa 1984. Through first-person narration, Clay describes
              his progressive alienation from the culture around him, loss of
              faith in his friends, and his meditations on events in his recent
              past.
            </span>
          ),
          cover: '/img/books/ellis/le.jpg',
        },

        {
          title: 'The Rules of Attraction',
          desc: (
            <span>
              The Rules of Attraction is a satirical black comedy novel by Bret
              Easton Ellis published in 1987. The novel focuses on a handful of
              rowdy and often sexually promiscuous, spoiled bohemian college
              students at a liberal arts college in 1980s New Hampshire,
              primarily focusing on three of them who find themselves in a love
              triangle. The novel is written in first person narrative, and the
              story is told from the points of view of various characters.
              <br />
              <br />
              The novel is written in the first-person, continuing the aesthetic
              of Ellis' earlier Less Than Zero, and is told from the points of
              view of multiple characters. The main narrators are three
              students: Paul, Sean, and Lauren. A number of other characters
              also provide first-hand accounts throughout the story, which takes
              place at the fictional Camden College, a liberal arts school on
              the East Coast of the United States. The three main characters
              (who rarely attend class) end up in a love triangle within a
              sequence of drug runs, "Dressed to Get Screwed," and "End of the
              World" parties.
            </span>
          ),
          cover: '/img/books/ellis/at.jpg',
        },

        {
          title: 'Glamorama',
          desc: (
            <span>
              is a 1998 novel by American writer Bret Easton Ellis. Glamorama is
              set in and satirizes the 1990s, specifically celebrity culture and
              consumerism. Time describes the novel as "a screed against models
              and celebrity."
              <br />
              <br />
              Set in 90s Manhattan, Victor Ward, a model with perfect abs and
              all the right friends, is seen and photographed everywhere, even
              in places he hasn't been and with people he doesn't know. He's
              living with one beautiful model and having an affair with another
              onthe eve of opening the trendiest nightclub in New York City
              history. And now it's time to move to the next stage. But the
              future he gets is not the one he had in mind.
            </span>
          ),
          cover: '/img/books/ellis/gl.jpg',
        },

        {
          title: 'Lunar Park',
          desc: (
            <span>
              Lunar Park is a mock memoir by American writer Bret Easton Ellis.
              It was released by Knopf in 2005. It was the first book written by
              Ellis to use past tense narrative. The title bears no relation to
              the public amusement locations known as Luna Park.
              <br />
              <br />
              The novel begins with an inflated and parodic but reasonably
              accurate portrayal of Ellis's early fame. It details incidents of
              his rampant drug use and his publicly humiliating book tours to
              promote Glamorama. The novel dissolves into fiction as Ellis
              describes a liaison with an actress named Jayne Dennis, whom he
              later marries, and with whom he conceives a child. From this
              point, the fictional Ellis' life reflects the real writer's only
              in some descriptions of the past and possibly in his general
              sentiments.
            </span>
          ),
          cover: '/img/books/ellis/lu.jpg',
        },
      ]}
    />
  );
};

export default King;
