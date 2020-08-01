export const expressMain = `
// App.js
const startServer = async () => {
  const app = express();

  await loader(app);

  app.listen(config.port);
};

startServer();


// loaders.js
export default async app => {
  await postgresLoader();
  await expressLoader(app);
};


// expressLoader.js
export default app => {
  app.get('/', (req, res) => {
    res.send('healt');
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use('/api', api());

  app.use((req, res, next) => {
    res.send('404');
  });

  app.use((err, req, res, next) => {
    console.log(err, 'error trigger');
    res.send(err);
  });
};


// controller.js
export default api => {
  const route = Router();

  api.use('/genres', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const genres = await genreService.getGenres();

      return res.json(genres);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const genre = await genreService.getGenreById(id);

      return res.json(genre);
    })
  );

  route.get(
    '/:id/animes',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const animes = await genreService.getGenreAnimes(id);

      return res.json(animes);
    })
  );
};


// service.js
export default {
  getGenres: async () => {
    const genres = await Genre.query();

    return genres;
  },

  getGenreById: async id => {
    const genre = await Genre.query().findById(id);

    return genre;
  },

  getGenreAnimes: async id => {
    const animes = await Genre.relatedQuery('animes').for(id);

    return animes;
  }
};

`;
