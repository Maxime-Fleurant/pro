export const jestmain = `
// test.ts
describe('StudioController', () => {
  let studioService: StudiosService;
  let studiosController: StudiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StudiosService,
          useValue: {
            findManyStudioOrchestration: () => {
              return null;
            },
            findOneOrchestration: () => {
              return null;
            },
            postOrchestration: () => {
              return null;
            },
            putOrchestration: () => {
              return null;
            },
            deleteOrchestration: () => {
              return null;
            },
          },
        },
        { provide: getRepositoryToken(Studio), useValue: {} },
        SearchStudio,
      ],
      controllers: [StudiosController],
    }).compile();

    studioService = module.get<StudiosService>(StudiosService);
    studiosController = module.get<StudiosController>(StudiosController);
  });

  it('should be defined', () => {
    expect(studiosController).toBeDefined();
  });

  describe('StudioController.getStudiosController method test', () => {
    it('Call Signature : (SearchStudioDto: {}) 
    : Promise<Studio[]>', async () => {
      const studioArray = [
        createStudio(1, 'fdlkfdl'),
        createStudio(2, 'lfdkl'),
      ];
      jest
        .spyOn(studioService, 'findManyStudioOrchestration')
        .mockResolvedValue(studioArray);

      const testCall = studiosController.getStudiosController({});

      expect(testCall).resolves.toMatchObject(studioArray);
    });

    it('Call Signature : (SearchStudioDto: {name:string}) 
    : Promise<Studio[]>', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest
        .spyOn(studioService, 'findManyStudioOrchestration')
        .mockResolvedValue(studioArray);

      expect(
        studiosController.getStudiosController({ name: 'fldk' }),
      ).resolves.toMatchObject(studioArray);
    });

    it('Call Signature : (SearchStudioDto: {id:number}) 
    : Promise<Studio[]>', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest
        .spyOn(studioService, 'findManyStudioOrchestration')
        .mockResolvedValue(studioArray);

      expect(
        studiosController.getStudiosController({ id: 1 }),
      ).resolves.toMatchObject(studioArray);
    });

    it('Call Signature : (SearchStudioDto: {name: string, id:number}) 
    : Promise<Studio[]>', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest
        .spyOn(studioService, 'findManyStudioOrchestration')
        .mockResolvedValue(studioArray);

      expect(
        studiosController.getStudiosController({ id: 1, name: 'fldk' }),
      ).resolves.toMatchObject(studioArray);
    });
  });

  describe('StudioController.getStudioController method test', () => {
    it('Call Signature : (id: number) : Promise<Studio[]>', async () => {
      const studioArray = [createStudio(1, 'fdlkfdl')];
      jest
        .spyOn(studioService, 'findOneOrchestration')
        .mockResolvedValue(studioArray);

      expect(studiosController.getStudioController(1)).resolves.toMatchObject(
        studioArray,
      );
    });
  });

  describe('StudioController.postStudioControler method test', () => {
    it('When called with non existing name 
    should return  Promise<{id: number}>', async () => {
      jest
        .spyOn(studioService, 'postOrchestration')
        .mockResolvedValue({ id: 1 });

      expect(
        studiosController.postStudioControler({ name: 'fldk' }),
      ).resolves.toMatchObject({ id: 1 });
    });

    it('When called with  existing name trow QueryFailedError', async () => {
      jest
        .spyOn(studioService, 'postOrchestration')
        .mockRejectedValue(new QueryFailedError('fldk', ['dsml'], 'fdlk'));

      expect(
        studiosController.postStudioControler({ name: 'fldk' }),
      ).rejects.toThrow(QueryFailedError);
    });
  });

  describe('StudioController.putStudioController method test', () => {
    it('When called with existing id should 
    return Promise<{id: number}>', async () => {
      jest
        .spyOn(studioService, 'putOrchestration')
        .mockResolvedValue({ id: 1 });

      expect(
        studiosController.putStudioController(1, { name: 'fldk' }),
      ).resolves.toMatchObject({ id: 1 });
    });

    it('When called with non existing id 
    should return Promise<{id: null}>', async () => {
      jest
        .spyOn(studioService, 'putOrchestration')
        .mockResolvedValue({ id: null });

      expect(
        studiosController.putStudioController(1, { name: 'fldk' }),
      ).resolves.toMatchObject({ id: null });
    });

    it('When updating with already used name
     should trow QueryFailedError', async () => {
      jest
        .spyOn(studioService, 'putOrchestration')
        .mockRejectedValue(new QueryFailedError('fldk', ['dsml'], 'fdlk'));

      expect(
        studiosController.putStudioController(1, { name: 'fldk' }),
      ).rejects.toThrow(QueryFailedError);
    });
  });

  describe('StudioController.deleteStudioController method test', () => {
    it(\`When called with existing id 
    should return Promise<'deleted'>\`, async () => {
      jest
        .spyOn(studioService, 'deleteOrchestration')
        .mockResolvedValue('deleted');

      expect(studiosController.deleteStudioController(1)).resolves.toMatch(
        'deleted',
      );
    });

    it(\`When called with non existing id 
    should return Promise<'doesn't exist'>\`, async () => {
      jest
        .spyOn(studioService, 'deleteOrchestration')
        .mockResolvedValue(\`doesn't exist\`);

      expect(studiosController.deleteStudioController(1)).resolves.toMatch(
        \`doesn't exist\`,
      );
    });
  });
});


`;

export const jestUnit = `
// unitTest.ts
describe('SearchStudio', () => {
  class TestRepo {
    createQueryBuilder: () => SelectQueryBuilder<Studio>;
  }

  let searchStudio: SearchStudio;
  let selectQueryBuilder: SelectQueryBuilder<Studio>;
  let testRepo: TestRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SearchStudio,
        { provide: getRepositoryToken(Studio), useClass: TestRepo },
        { provide: 'selectQueryBuilder', useClass: SelectQueryBuilder },
      ],
    }).compile();

    searchStudio = module.get<SearchStudio>(SearchStudio);
    testRepo = module.get<TestRepo>(getRepositoryToken(Studio));
    selectQueryBuilder = module.get<SelectQueryBuilder<Studio>>(
      'selectQueryBuilder',
    );

    testRepo.createQueryBuilder = () => selectQueryBuilder;
  });

  it('should be defined', () => {
    expect(searchStudio).toBeDefined();
  });

  describe('SearchStudio find Method Test', () => {
    it('When called with DTO: {} -> return Studio[]', async () => {
      const studioArray = [
        createStudio(1, 'testname'),
        createStudio(2, 'lfdkl'),
      ];
      jest.spyOn(selectQueryBuilder, 'getMany').mockResolvedValue(studioArray);

      expect(searchStudio.find({})).resolves.toMatchObject(studioArray);
    });

    it('When called with DTO: {name:value} -> return Studio[]', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest.spyOn(selectQueryBuilder, 'getMany').mockResolvedValue(studioArray);

      expect(searchStudio.find({ name: 'fldk' })).resolves.toMatchObject(
        studioArray,
      );
    });

    it('When called with DTO: {id:value} -> return Studio[]', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest.spyOn(selectQueryBuilder, 'getMany').mockResolvedValue(studioArray);

      expect(searchStudio.find({ id: 1 })).resolves.toMatchObject(studioArray);
    });

    it('When called with DTO: {name:, value, id:value} ->
     return Studio[]', async () => {
      const studioArray = [createStudio(1, 'fldk')];
      jest.spyOn(selectQueryBuilder, 'getMany').mockResolvedValue(studioArray);

      expect(searchStudio.find({ id: 1, name: 'fldk' })).resolves.toMatchObject(
        studioArray,
      );
    });
  });
});

`;
