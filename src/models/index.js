// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { House, Events, Users } = initSchema(schema);

export {
  House,
  Events,
  Users
};