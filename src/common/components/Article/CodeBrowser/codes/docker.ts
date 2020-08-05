export const dockerMain = `
// docker-compose.yml
version: '3.7'

services:
  postgresql:
    image: postgres
    environment:
      POSTGRES_USER: anidb
      POSTGRES_PASSWORD: pass
    ports:
      - '5432:5432'

  api-postgres:
    depends_on:
      - postgresql
      - migrate-postgres
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - '3000:3000'
    volumes:
      - '.:/app'
      - 'app/node_modules'

  migrate-postgres:
    depends_on:
      - postgresql
    build:
      context: ./db/postgres
      dockerfile: Dockerfile.dev
    command: ./wait-for-it.sh postgresql:5432 -- npm start

`;
