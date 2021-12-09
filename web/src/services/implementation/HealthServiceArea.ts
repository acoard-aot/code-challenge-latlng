import axios from "axios";
import { injectable } from "inversify-props";
import IHealthServiceArea from "@/services/IHealthServiceArea";

@injectable()
export default class HealthServiceArea implements IHealthServiceArea {
  private readonly API_URL: string = "http://localhost:8080/";

  public async getAreaName(): Promise<string> {
    const httpResponse = await axios.get<string>(this.API_URL);
    await this.sleep(1000);
    return httpResponse.data;
  }

  private sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
