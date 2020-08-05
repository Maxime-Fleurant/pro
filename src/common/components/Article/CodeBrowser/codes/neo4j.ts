export const neomain = `
// nodeModel.js
module.exports = {
  schema: Joi.object({
    firstName: Joi.string().allow(null).allow(''),
    lastName: Joi.string().allow(null).allow(''),
    nativeName: Joi.string().allow(null).allow(''),
    largeImage: Joi.string(),
    mediumImage: Joi.string(),
    description: Joi.string().allow(null).allow(''),
  }),

  async save(inputObj) {
    if (this.schema.validate(inputObj).error)
      throw this.schema.validate(inputObj).error;

    const newLinkInput = { ...inputObj };

    const session = driver.session();
    const saveLink = await session.run(
      \`CREATE (a:CHARACTER {
        characterId: randomUUID(),
        firstName : $firstName,
        lastName : $lastName,
        nativeName : $nativeName,
        description : $description,
        largeImage : $largeImage,
        mediumImage : $mediumImage
      }) RETURN  a\`,
      newLinkInput
    );

    await session.close();

    return {
      record: saveLink.records[0].toObject().a.properties,
      bookmarks: session.lastBookmark(),
    };
  },
};


// relationModel.js
module.exports = {
  schema: Joi.object({
    from: Joi.string().required(),
    to: Joi.string().required(),
    bookmarks: Joi.array(),
  }),

  async save(inputObj) {
    if (this.schema.validate(inputObj).error)
      throw new Error('Validation Error');

    const newLinkInput = { ...inputObj };

    const session = driver.session({ bookmarks: this.schema.bookmarks || [] });
    const saveLink = await session.run(
      \`MATCH (l:CHARACTER {characterId:$from})
      MATCH (a:ANIME {animeId:$to})
      CREATE (l)-[r:character_of]->(a)
      RETURN r\`,
      newLinkInput
    );

    await session.close();

    return {
      record: saveLink.records[0].toObject(),
      bookmarks: session.lastBookmark(),
    };
  },
};

`;
