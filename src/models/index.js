// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cube, Node, Position, S3Object } = initSchema(schema);

export {
  Cube,
  Node,
  Position,
  S3Object
};