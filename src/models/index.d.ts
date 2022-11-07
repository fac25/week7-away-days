import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type USERSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUSERS = {
  readonly id: string;
  readonly name?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUSERS = {
  readonly id: string;
  readonly name?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type USERS = LazyLoading extends LazyLoadingDisabled ? EagerUSERS : LazyUSERS

export declare const USERS: (new (init: ModelInit<USERS, USERSMetaData>) => USERS) & {
  copyOf(source: USERS, mutator: (draft: MutableModel<USERS, USERSMetaData>) => MutableModel<USERS, USERSMetaData> | void): USERS;
}