import { shipsAPI } from './ships/ships';

export enum MainCategories {
  ROCKETS = 'Rockets',
  DRAGONS = 'Dragons',
  SHIPS = 'Ships',
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
