import { buildSchema } from 'type-graphql';
import 'reflect-metadata';
import './utils/connection';
import { ApolloServer } from 'apollo-server';
import { CategoryResolver } from './graphql/category/CategoryResolver';
import { VideoResolver } from './graphql/video/VideoResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      CategoryResolver,
      VideoResolver,
    ],
  });

  const server = new ApolloServer({ schema, playground: true });
  await server.listen({ port: 4001 });
}

bootstrap();
