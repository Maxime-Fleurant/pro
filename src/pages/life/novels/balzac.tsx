import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="Honoré de Balzac"
      directorWiki="https://www.wikiwand.com/en/William_Faulkner"
      films={[
        {
          title: 'Eugénie Grandet',
          desc: (
            <span>
              Eugénie Grandet is a novel first published in 1833 by French
              author Honoré de Balzac. While he was writing it he conceived his
              ambitious project, The Human Comedy, and almost immediately
              prepared a second edition, revising the names of some of the
              characters so that Eugénie Grandet then fitted into the section:
              Scenes from provincial life (Scènes de la vie de province) in the
              Comédie. He dedicated the edition to Maria Du Fresnay, who was
              then his lover and was the mother of his daughter, Marie-Caroline
              Du Fresnay.
              <br />
              <br />
              Felix Grandet, master cooper, married the daughter of a wealthy
              timber merchant at a time when the French Republic had confiscated
              the lands of the Church in the district of Saumur. When the land
              was auctioned his wife's dowry and his existing savings enabled
              him to buy substantial property, including some of the best area
              under vines, all at a very satisfactory price. Though there was
              little sympathy locally for the Revolution, Grandet rose in esteem
              and became mayor, later yielding the post under the Empire only
              because Napoleon had no liking for republicans. At this time his
              only daughter was ten years old and in that same year more wealth
              fell into Grandet's lap by way of inheritance of the estates of
              his mother-in-law, grandfather-in-law, and grandmother.
            </span>
          ),
          cover: '/img/books/bal/eu.jpg',
        },
      ]}
    />
  );
};

export default King;
