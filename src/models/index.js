// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reviews, Profile, Accommodation, Events } = initSchema(schema);

export {
  Reviews,
  Profile,
  Accommodation,
  Events
};