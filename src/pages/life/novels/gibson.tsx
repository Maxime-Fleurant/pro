import NovelArticle from '../../../common/components/NovelArticle';

const King = () => {
  return (
    <NovelArticle
      director="William Gibson"
      directorWiki="https://www.wikiwand.com/en/William_Gibson"
      films={[
        {
          title: 'Neuromancer',
          desc: (
            <span>
              Neuromancer is a 1984 science fiction novel by American-Canadian
              writer William Gibson. It is one of the best-known works in the
              cyberpunk genre and the first novel to win the Nebula Award, the
              Philip K. Dick Award, and the Hugo Award. It was Gibson's debut
              novel and the beginning of the Sprawl trilogy. Set in the future,
              the novel follows Henry Case, a washed-up computer hacker who is
              hired for one last job, which brings him up against a powerful
              artificial intelligence.
              <br />
              <br />
              Henry Dorsett Case is a low-level hustler in the dystopian
              underworld of Chiba City, Japan. Once a talented computer hacker,
              Case was caught stealing from his employer. As punishment for his
              theft, Case's central nervous system was damaged with a mycotoxin,
              leaving him unable to access the global computer network in
              cyberspace, a virtual reality dataspace called the "matrix". Case
              is unemployable, suicidal, and apparently at the top of the hit
              list of a drug lord named Wage. Case is saved by Molly Millions,
              an augmented "street samurai" and mercenary for a shadowy US
              ex-military officer named Armitage, who offers to cure Case in
              exchange for his services as a hacker. Case jumps at the chance to
              regain his life as a "console cowboy," but neither Case nor Molly
              knows what Armitage is really planning. Case's nervous system is
              repaired using new technology that Armitage offers the clinic as
              payment, but he soon learns from Armitage that sacs of the poison
              that first crippled him have been placed in his blood vessels as
              well. Armitage promises Case that if he completes his work in
              time, the sacs will be removed; otherwise they will dissolve,
              disabling him again. He also has Case's pancreas replaced and new
              tissue grafted into his liver, leaving Case incapable of
              metabolizing cocaine or amphetamines and apparently ending his
              drug addiction.
            </span>
          ),
          cover: '/img/books/gib/neu.jpg',
        },

        {
          title: 'Mona Lisa Overdrive',
          desc: (
            <span>
              Mona Lisa Overdrive is a science fiction novel by
              American-Canadian writer William Gibson, published in 1988. It is
              the final novel of the cyberpunk Sprawl trilogy, following
              Neuromancer and Count Zero, taking place eight years after the
              events of the latter. The novel was nominated for the Nebula Award
              for Best Novel, the Hugo Award for Best Novel, and the Locus Award
              for Best Science Fiction Novel in 1989.
              <br />
              <br />
              Taking place eight years after the events of Count Zero and
              fifteen years after Neuromancer, the story is formed from several
              interconnecting plot threads, and also features characters from
              Gibson's previous works (such as Molly Millions, the
              razor-fingered mercenary from Neuromancer). One of the plot
              threads concerns Mona, a teen prostitute who has a
              more-than-passing resemblance to famed Simstim superstar Angie
              Mitchell. Mona is hired by shady individuals for a "gig" which
              later turns out to be part of a plot to abduct Angie.
            </span>
          ),
          cover: '/img/books/gib/mo.jpg',
        },

        {
          title: 'Virtual Light',
          desc: (
            <span>
              Virtual Light is a science fiction novel by American-Canadian
              writer William Gibson, the first book in his Bridge trilogy.
              Virtual Light is a science-fiction novel set in a postmodern,
              dystopian, cyberpunk future. The term 'Virtual Light' was coined
              by scientist Stephen Beck to describe a form of instrumentation
              that produces optical sensations directly in the eye without the
              use of photons. The novel was a finalist nominee for a Hugo Award,
              and shortlisted for the Locus Award in 1994.
              <br />
              <br />
              The plot centers around Chevette Washington, a young bicycle
              messenger who lives in the ad hoc, off-the-grid community that has
              grown on the San Francisco-Oakland Bay Bridge in the aftermath of
              a devastating earthquake. Chevette, on a whim, steals a pair of
              dark-rimmed glasses from a man at a party because she is offended
              by his demeanor. Soon after, she realizes that the glasses have
              unlikely importance, as security company henchmen begin tracking
              and following her. Among the pursuers are Svobodov and Orlovsky,
              two Russian immigrants who reside in San Francisco and are
              employed as cops, as well as Loveless, a ruthless corporate hitman
              with gold incisors. The glasses contain plans by a powerful
              corporation to rebuild San Francisco entirely using
              nanotechnology, and for that reason, they are highly coveted and
              present a danger to the person who possesses them.
            </span>
          ),
          cover: '/img/books/gib/vi.jpg',
        },
      ]}
    />
  );
};

export default King;
