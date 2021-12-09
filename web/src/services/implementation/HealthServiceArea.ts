import axios from 'axios'
import { injectable } from 'inversify-props'
import IHealthServiceArea from '@/services/IHealthServiceArea'

@injectable()
export default class HealthServiceArea implements IHealthServiceArea {
  private readonly API_URL: string = 'https://localhost:5000/'

  public async getAreaName (): Promise<string> {
    const httpResponse = await axios.get<string>(this.API_URL);
    return httpResponse.data;
  }
}