export const reduxMain = `
// app.tsx
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const reduxStore = useStore();

  return (
    <Provider store={reduxStore}>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  );
}
export default MyApp;


// slice.tsx
const animeListPageSlice = createSlice({
  name: 'animeListPage',
  initialState: {
    formSelection: {},
  },
  reducers: {
    updateFormSelection: (state, action) => {
      const formatedFormSelection = _.pickBy(
        action.payload,
        (field) => field && field.length
      );

      return { ...state, formSelection: formatedFormSelection };
    },
  },
});

export const animeListPageReducers = animeListPageSlice.reducer;
export const { updateFormSelection } = animeListPageSlice.actions;


`;

export const reduxTypescript = `
// configureStore.ts
const reducer = combineReducers({ animeListPageReducers, lightReducer });
export type TStore = ReturnType<typeof reducer>;

function initStore() {
  const storeInit = configureStore({
    reducer,
  });
  return storeInit;
}

`;

export const reduxContainer = `
// containerComponent.tsx
// REACT
export const ContainerAnimeList = (): JSX.Element => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.animeListPageReducers.formSelection;
  });

  const { loading, error, data: animes, fetchMore } = useQuery<{
    searchAnime: Anime[];
  }>(SEARCH_ANIME, {
    variables: { ...stateFormSelection, skip: 0 },
    fetchPolicy: 'network-only',
  });

  const fetchMoreHandler = (): void => {
    if (animes) {
      fetchMore({
        variables: { skip: animes.searchAnime.length as number },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult) {
            return {
              searchAnime: [
                ...prev.searchAnime,
                ...fetchMoreResult.searchAnime,
              ],
            };
          }

          return { searchAnime: [...prev.searchAnime] };
        },
      });
    }
  };

  if (animes) {
    const formatedAnime = animes.searchAnime.map((anime: Anime) => {
      return {
        label: anime.romajiTitle,
        img: anime.largeCoverImage,
        id: anime.id,
      };
    });

    return (
      <GenericList fetchMore={fetchMoreHandler} entityList={formatedAnime} />
    );
  }

  return <div />;
};


// presentationalComponent.tsx
// TYPE DEFINITION
export interface IEntity {
  label: string | null | undefined;
  img: string | null | undefined;
  id: string;
}

type TGenericList = (
  props: PropsWithChildren<{
    entityList: IEntity[];
    loading?: boolean;
    fetchMore?: () => void;
    infinite?: boolean;
    total?: number;
    url?: string;
  }>
) => ReactElement;

// REACT COMPONENT
const GenericList: TGenericList = ({ entityList = [], fetchMore }) => {
  let deskRowStart = 7;
  let deskColStart = 1;

  let tabRowStart = 7;
  let tabColStart = 1;

  const lastElem = useRef<HTMLAnchorElement>(null);

  const theme = useTheme<ITheme>();

  const handleScroll = (): void => {
    if (lastElem && lastElem.current) {
      if (
        window.pageYOffset + window.innerHeight >
        lastElem.current.offsetTop
      ) {
        if (fetchMore) {
          window.removeEventListener('scroll', handleScroll);
          fetchMore();
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [entityList]);

  const entityListJsx = entityList.map((entity, index, { length }) => {
    if (deskColStart === 25) {
      deskColStart = 1;
      deskRowStart += 7;
    }

    if (tabColStart === 25) {
      tabColStart = 1;
      tabRowStart += 2;
    }

    const singleEntity = (
      <Fragment key={entity.id}>
        <Link href="/animes/[id]" as={\`/animes/\${entity.id}\`}>
          <Cell
            deskPos={{
              rowStart: deskRowStart,
              rowEnd: deskRowStart + 5,
              columnStart: deskColStart,
              columnEnd: deskColStart + 4,
            }}
            tabPos={{
              rowStart: tabRowStart,
              rowEnd: tabRowStart + 1,
              columnStart: tabColStart,
              columnEnd: tabColStart + 6,
            }}
            extraCss={[imgBorder, imgWrapp]}
            ratio={1.3}
            backgroundImg={entity.img}
          />
        </Link>

        <Cell
          deskPos={{
            rowStart: deskRowStart + 5,
            rowEnd: deskRowStart + 7,
            columnStart: deskColStart,
            columnEnd: deskColStart + 4,
          }}
          tabPos={{
            rowStart: tabRowStart + 1,
            rowEnd: tabRowStart + 2,
            columnStart: tabColStart,
            columnEnd: tabColStart + 6,
          }}
          extraCss={[
            fontRegular,
            helveticaRegular,
            textLineHeight,
            theme.text.textColor900,
          ]}
        >
          <Link href="/animes/[id]" as={\`/animes/\${entity.id}\`}>
            <a ref={index === length - 1 ? lastElem : null} css={aLink}>
              {entity.label}
            </a>
          </Link>
        </Cell>
      </Fragment>
    );

    deskColStart += 4;
    tabColStart += 6;

    return singleEntity;
  });

  return <>{entityListJsx}</>;
};

export default memo(GenericList);


`;
