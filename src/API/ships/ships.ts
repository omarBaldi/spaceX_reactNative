import axios from 'axios';
import { BASE_API_URL } from '..';

interface ShipI {
  id: string;
  name: string;
  image: string;
  type: string;
  model: string;
  active: boolean;
  roles: string[];
  mass_kg: string;
  year_built: string;
  home_port: string;
}

class Ships {
  private static SHIPS_API_PARAM = 'ships';
  public async getAll(): Promise<ShipI[]> {
    const { data: ships } = await axios({
      method: 'GET',
      url: `${BASE_API_URL}/${Ships.SHIPS_API_PARAM}`,
    });

    return ships as ShipI[];
  }
}

export const shipsAPI = new Ships();
