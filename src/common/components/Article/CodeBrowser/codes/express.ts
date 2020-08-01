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

  api.use('/characters', route);

  route.get(
    '/',
    asyncHandler(async (req, res) => {
      const characters = await characterService.getCharacters();

      return res.json(characters);
    })
  );

  route.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.getCharacterById(id);

      return res.json(character);
    })
  );

  route.post(
    '/',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        nativeName: Joi.string(),
        largeImage: Joi.string(),
        mediumImage: Joi.string(),
        description: Joi.string(),
        animeId: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const character = await characterService.createCharacter(req.body);

      return res.json(character);
    })
  );

  route.put(
    '/:id',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        nativeName: Joi.string(),
        largeImage: Joi.string(),
        mediumImage: Joi.string(),
        description: Joi.string()
      })
    }),
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.updateCharacter(id, req.body);

      return res.json(character);
    })
  );

  route.delete(
    '/:id',
    asyncHandler(async (req, res) => {
      const { id } = req.params;

      const character = await characterService.removeCharacter(id);

      return res.json(character);
    })
  );
};


// service.js
export default {
  getCharacters: async () => {
    const characters = await Character.query();

    return characters;
  },

  getCharacterById: async id => {
    const character = await Character.query().findById(id);

    return character;
  },

  createCharacter: async body => {
    const character = await Character.query().insert(body);

    return character;
  },

  updateCharacter: async (id, data) => {
    const character = await Character.query().patchAndFetchById(id, data);

    return character;
  },

  removeCharacter: async id => {
    const anime = await Character.query().deleteById(id);

    return anime;
  }
};

// model.js
class Anime extends Model {
  static get tableName() {
    return 'animes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        romajiTitle: { type: 'string' },
        englishTitle: { type: 'string' },
        nativeTitle: { type: 'string' },
        description: { type: 'string' },
        startDate: { type: 'date' },
        endDate: { type: 'date' },
        nbEpisodes: { type: 'number' },
        trailer: { type: 'string' },
        xLargeCover: { type: 'string' },
        largeCover: { type: 'string' },
        mediumCover: { type: 'string' },
        popularity: { type: 'number' },
        avgScore: { type: 'number' },
        studioId: { type: 'string' },
      },
      required: ['romajiTitle', 'description'],
    };
  }

  static get relationMappings() {
    return {
      genres: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'genre'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_genres.animeId',
            to: 'animes_genres.genreId',
          },
          to: 'genres.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'tag'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_tags.animeId',
            to: 'animes_tags.tagId',
          },
          to: 'tags.id',
        },
      },
      studio: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'studio'),
        join: {
          from: 'animes.studioId',
          to: 'studios.id',
        },
      },
      externalLinks: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'externalLink'),
        join: {
          from: 'animes.id',
          to: 'externalLinks.animeId',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'review'),
        join: {
          from: 'animes.id',
          to: 'reviews.animeId',
        },
      },
      characters: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'character'),
        join: {
          from: 'animes.id',
          to: 'characters.animeId',
        },
      },
    };
  }
}

export default Anime;

// authMiddleware.js
export default asyncHandler(async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    token = req.headers.authorization;
  }

  const verifJwt = await jwt.verify(token, process.env.JWT_SECRET);

  req.userId = verifJwt.id;

  next();
});

`;

export const expressJwt = `
// authMiddleware.js
export default asyncHandler(async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    token = req.headers.authorization;
  }

  const verifJwt = await jwt.verify(token, process.env.JWT_SECRET);

  req.userId = verifJwt.id;

  next();
});

`;

export const expressModel = `
// model.js
class Anime extends Model {
  static get tableName() {
    return 'animes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        romajiTitle: { type: 'string' },
        englishTitle: { type: 'string' },
        nativeTitle: { type: 'string' },
        description: { type: 'string' },
        startDate: { type: 'date' },
        endDate: { type: 'date' },
        nbEpisodes: { type: 'number' },
        trailer: { type: 'string' },
        xLargeCover: { type: 'string' },
        largeCover: { type: 'string' },
        mediumCover: { type: 'string' },
        popularity: { type: 'number' },
        avgScore: { type: 'number' },
        studioId: { type: 'string' },
      },
      required: ['romajiTitle', 'description'],
    };
  }

  static get relationMappings() {
    return {
      genres: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'genre'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_genres.animeId',
            to: 'animes_genres.genreId',
          },
          to: 'genres.id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'tag'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_tags.animeId',
            to: 'animes_tags.tagId',
          },
          to: 'tags.id',
        },
      },
      studio: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'studio'),
        join: {
          from: 'animes.studioId',
          to: 'studios.id',
        },
      },
      externalLinks: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'externalLink'),
        join: {
          from: 'animes.id',
          to: 'externalLinks.animeId',
        },
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'review'),
        join: {
          from: 'animes.id',
          to: 'reviews.animeId',
        },
      },
      characters: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'character'),
        join: {
          from: 'animes.id',
          to: 'characters.animeId',
        },
      },
    };
  }
}

export default Anime;

`;
