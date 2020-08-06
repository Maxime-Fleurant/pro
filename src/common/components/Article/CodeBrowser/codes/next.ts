export const nextMain = `
// page.tsx
// TYPE
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// REACT
const Index: IndexComponent = ({ anime }) => {
  return (
    <>
      <Head>
        <title>{anime ? anime.romajiTitle : 'anime'}</title>
        <meta property="og:anime" content="{anime.romajiTitle}" key="anime" />
      </Head>
      <AnimeDetail anime={anime} />
    </>
  );
};

export default Index;

// SSR
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}> = async ({
  params,
}) => {
  const apolloClient = initializeApollo();

  const anime = await apolloClient.query<{ Anime: Anime }>({
    query: ANIME,
    variables: { id: params?.id },
  });

  return {
    props: {
      anime: anime.data.Anime,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const apolloClient = initializeApollo();

  const animes = await apolloClient.query<{ Animes: Anime[] }>({
    query: ALLANIMES,
  });

  const paths = animes.data.Animes.map((anime) => {
    return { params: { id: anime.id } };
  });

  return { paths, fallback: true };
};


`;

export const nextpage = `
// page[id].tsx
// SSR
export const getStaticProps: GetStaticProps<{ anime: Anime } | {}> = async ({
  params,
}) => {
  const apolloClient = initializeApollo();

  const anime = await apolloClient.query<{ Anime: Anime }>({
    query: ANIME,
    variables: { id: params?.id },
  });

  return {
    props: {
      anime: anime.data.Anime,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const apolloClient = initializeApollo();

  const animes = await apolloClient.query<{ Animes: Anime[] }>({
    query: ALLANIMES,
  });

  const paths = animes.data.Animes.map((anime) => {
    return { params: { id: anime.id } };
  });

  return { paths, fallback: true };
};


`;
