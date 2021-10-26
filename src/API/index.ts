import { shipsAPI } from './ships/ships';

export enum MainCategories {
  ROCKETS = 'Rockets',
  DRAGONS = 'Dragons',
  SHIPS = 'Ships',
}

/* Elements Interfaces */

export interface ShipsI {
  id: string;
  link: string;
  home_port: string;
  type: string;
  model: string;
  name: string;
  active: boolean;
  launches: string[];
  roles: string[];
  mass_kg: number;
  year_built: number;
  image?: string;
}

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
  type: string;
  active: boolean;
  crew_capacity: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  flickr_images: string[];
  first_flight: number;
  diameter: { meters: number };
  height_w_trunk: { meters: number };
  //TODO: add the other informations key from the dragons endpoint (see API documentation)
}

const BASE_API_URL = 'https://api.spacexdata.com/v4';

export const mainCategoriesAPIEndpoint = {
  [MainCategories.ROCKETS]: `${BASE_API_URL}/rockets`,
  [MainCategories.DRAGONS]: `${BASE_API_URL}/dragons`,
  [MainCategories.SHIPS]: `${BASE_API_URL}/ships`,
};

export const MainCategoriesAPI = {
  ROCKETS_API_URL: `${BASE_API_URL}/rockets`,
  DRAGONS_API_URL: `${BASE_API_URL}/dragons`,
  SHIPS_API_URL: `${BASE_API_URL}/ships`,
  LAUNCHES_API_URL: `${BASE_API_URL}/launches`,
};

export { shipsAPI, BASE_API_URL };
