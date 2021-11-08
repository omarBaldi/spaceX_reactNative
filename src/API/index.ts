export enum MainCategories {
  ROCKETS = 'Rockets',
  DRAGONS = 'Dragons',
  LANDPADS = 'Landpads',
}

/* Elements Interfaces */
export interface RocketsI {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: number;
  country: string;
  wikipedia: string;
  description: string;
  flickr_images: string[];
  height: { meters: number };
  diameter: { meters: number };
  mass: { kg: number };
  //TODO: add the engines key from the rockets endpoint (see API documentation)
}

export interface DragonsI {
  id: string;
  name: string;
  description: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  flickr_images: string[];
  first_flight: number;
  diameter: { meters: number };
  height_w_trunk: { meters: number };
  //TODO: add the other informations key from the dragons endpoint (see API documentation)
}

export interface LandpadsI {
  id: string;
  full_name: string;
  name: string;
  status: string;
  type: string;
  locality: string;
  region: string;
  landing_attempts: number;
  landing_successes: string;
  wikipedia: string;
  details: string;
  launches: string[];
  images: { large: string[] };
}

export type MainCategoryProps = RocketsI | DragonsI | LandpadsI;
export type MaincategoryArrayProps = RocketsI[] | DragonsI[] | LandpadsI[];

export const BASE_API_URL = 'https://api.spacexdata.com/v4';

export const mainCategoriesAPIEndpoint = {
  [MainCategories.ROCKETS]: `${BASE_API_URL}/rockets`,
  [MainCategories.DRAGONS]: `${BASE_API_URL}/dragons`,
  [MainCategories.LANDPADS]: `${BASE_API_URL}/landpads`,
};

export const getImagePathRequire = {
  [MainCategories.ROCKETS]: require('../assets/images/rocket.jpg'),
  [MainCategories.DRAGONS]: require('../assets/images/dragon.jpg'),
  [MainCategories.LANDPADS]: require('../assets/images/launch.jpg'),
};
