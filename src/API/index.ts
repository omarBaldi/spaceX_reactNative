import { shipsAPI } from './ships/ships';

const BASE_API_URL = 'https://api.spacexdata.com/v4';

export const MainCategoriesAPI = {
  ROCKETS_API_URL: `${BASE_API_URL}/rockets`,
  DRAGONS_API_URL: `${BASE_API_URL}/dragons`,
  SHIPS_API_URL: `${BASE_API_URL}/ships`,
  LAUNCHES_API_URL: `${BASE_API_URL}/launches`,
};

export { shipsAPI, BASE_API_URL };
