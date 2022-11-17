import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccommodationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerReviews = {
  readonly id: string;
  readonly name?: string | null;
  readonly rating?: number | null;
  readonly description?: string | null;
  readonly UserID?: string | null;
  readonly EventID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReviews = {
  readonly id: string;
  readonly name?: string | null;
  readonly rating?: number | null;
  readonly description?: string | null;
  readonly UserID?: string | null;
  readonly EventID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reviews = LazyLoading extends LazyLoadingDisabled ? EagerReviews : LazyReviews

export declare const Reviews: (new (init: ModelInit<Reviews, ReviewsMetaData>) => Reviews) & {
  copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

type EagerProfile = {
  readonly id: string;
  readonly about?: string | null;
  readonly UserID?: string | null;
  readonly name?: string | null;
  readonly lastName?: string | null;
  readonly favSports?: string | null;
  readonly whyOnAwayDays?: string | null;
  readonly oneAmazingSportEvent?: string | null;
  readonly pastEvents?: string | null;
  readonly interests?: string | null;
  readonly profilePic?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly id: string;
  readonly about?: string | null;
  readonly UserID?: string | null;
  readonly name?: string | null;
  readonly lastName?: string | null;
  readonly favSports?: string | null;
  readonly whyOnAwayDays?: string | null;
  readonly oneAmazingSportEvent?: string | null;
  readonly pastEvents?: string | null;
  readonly interests?: string | null;
  readonly profilePic?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile, ProfileMetaData>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

type EagerAccommodation = {
  readonly id: string;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly UserID?: string | null;
  readonly EventID?: string | null;
  readonly facilities?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccommodation = {
  readonly id: string;
  readonly location?: string | null;
  readonly description?: string | null;
  readonly UserID?: string | null;
  readonly EventID?: string | null;
  readonly facilities?: string | null;
  readonly img?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Accommodation = LazyLoading extends LazyLoadingDisabled ? EagerAccommodation : LazyAccommodation

export declare const Accommodation: (new (init: ModelInit<Accommodation, AccommodationMetaData>) => Accommodation) & {
  copyOf(source: Accommodation, mutator: (draft: MutableModel<Accommodation, AccommodationMetaData>) => MutableModel<Accommodation, AccommodationMetaData> | void): Accommodation;
}

type EagerEvents = {
  readonly id: string;
  readonly name?: string | null;
  readonly sport?: string | null;
  readonly img?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly UserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly id: string;
  readonly name?: string | null;
  readonly sport?: string | null;
  readonly img?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly UserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events, EventsMetaData>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}