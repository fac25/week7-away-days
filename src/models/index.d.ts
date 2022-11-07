import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type HouseMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type EventsMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type UsersMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type EagerHouse = {
  readonly id: string;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly img?: string | null;
  readonly facilities?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyHouse = {
  readonly id: string;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly img?: string | null;
  readonly facilities?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type House = LazyLoading extends LazyLoadingDisabled
  ? EagerHouse
  : LazyHouse;

export declare const House: (new (
  init: ModelInit<House, HouseMetaData>
) => House) & {
  copyOf(
    source: House,
    mutator: (
      draft: MutableModel<House, HouseMetaData>
    ) => MutableModel<House, HouseMetaData> | void
  ): House;
};

type EagerEvents = {
  readonly id: string;
  readonly name?: string | null;
  readonly sport?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyEvents = {
  readonly id: string;
  readonly name?: string | null;
  readonly sport?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Events = LazyLoading extends LazyLoadingDisabled
  ? EagerEvents
  : LazyEvents;

export declare const Events: (new (
  init: ModelInit<Events, EventsMetaData>
) => Events) & {
  copyOf(
    source: Events,
    mutator: (
      draft: MutableModel<Events, EventsMetaData>
    ) => MutableModel<Events, EventsMetaData> | void
  ): Events;
};

type EagerUsers = {
  readonly id: string;
  readonly name?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUsers = {
  readonly id: string;
  readonly name?: string | null;
  readonly lastname?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Users = LazyLoading extends LazyLoadingDisabled
  ? EagerUsers
  : LazyUsers;

export declare const Users: (new (
  init: ModelInit<Users, UsersMetaData>
) => Users) & {
  copyOf(
    source: Users,
    mutator: (
      draft: MutableModel<Users, UsersMetaData>
    ) => MutableModel<Users, UsersMetaData> | void
  ): Users;
};
