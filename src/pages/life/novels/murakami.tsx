import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Haruki Murakami"
      directorWiki="https://www.wikiwand.com/en/Haruki_Murakami"
      films={[
        {
          title: '1Q84',
          desc: (
            <span>
              1Q84 (いちきゅうはちよん, Ichi-Kyū-Hachi-Yon) is a dystopian novel
              written by Japanese writer Haruki Murakami, first published in
              three volumes in Japan in 2009–10. It covers a fictionalized year
              of 1984 in parallel with a "real" one. The novel is a story of how
              a woman named Aomame begins to notice strange changes occurring in
              the world. She is quickly enraptured in a plot involving Sakigake,
              a religious cult, and her childhood love, Tengo, and embarks on a
              journey to discover what is "real". Its first printing sold out on
              the day it was released and sales reached a million within a
              month. The English-language edition of all three volumes, with the
              first two volumes translated by Jay Rubin and the third by Philip
              Gabriel, was released in North America and the United Kingdom on
              October 25, 2011. An excerpt from the novel, "Town of Cats",
              appeared in the September 5, 2011 issue of The New Yorker
              magazine. The first chapter of 1Q84 had also been read as an
              excerpt in the Selected Shorts series at Symphony Space in New
              York.
              <br />
              <br />
              The year is 1984 and the city is Tokyo. A young woman named Aomame
              follows a taxi driver's enigmatic suggestion and begins to notice
              puzzling discrepancies in the world around her. She has entered,
              she realizes, a parallel existence, which she calls 1Q84 - "Q" is
              for "question mark". A world that bears a question. Meanwhile, an
              aspiring writer named Tengo takes on a suspect ghostwriting
              project. He becomes so wrapped up with the work and its unusual
              author that, soon, his previously placid life begins to come
              unraveled. As Aomame's and Tengo's narratives converge over the
              course of this single year, we learn of the profound and tangled
              connections that bind them ever closer: a beautiful, dyslexic
              teenage girl with a unique vision; a mysterious religious cult
              that instigated a shoot-out with the metropolitan police; a
              reclusive, wealthy dowager who runs a shelter for abused women; a
              hideously ugly private investigator; a mild-mannered yet
              ruthlessly efficient bodyguard; and a peculiarly insistent
              television-fee collector. A love story, a mystery, a fantasy, a
              novel of self-discovery, a dystopia to rival George Orwell's, 1Q84
              is Haruki Murakami's most ambitious undertaking yet: an instant
              best seller in his native Japan, and a tremendous feat of
              imagination from one of our most revered contemporary writers.
            </span>
          ),
          cover: '/img/books/mura/q.jpg',
        },
      ]}
    />
  );
};

export default King;
