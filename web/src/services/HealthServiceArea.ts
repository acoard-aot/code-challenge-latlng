import axios from "axios";
import { injectable } from "inversify-props";
import IHealthServiceArea from "@/services/interfaces/IHealthServiceArea";
import LookupRequest from "@/models/LookupRequest";
import LookupResponse from "@/models/LookupResponse";
import { RequestStatus } from "@/models/RequestStatus";

@injectable()
export default class HealthServiceArea implements IHealthServiceArea {
  private readonly API_URL: string = "http://localhost:3000/bpoint";

  public async getAreaName(request: LookupRequest): Promise<LookupResponse> {
    const result = new LookupResponse();
    try {
      const httpResponse = await axios.get<string>(
        `${this.API_URL}/${request.latitude}/${request.longitude}`
      );
      if (httpResponse.status == 200) {
        result.data = httpResponse.data;
        result.status = RequestStatus.Success;
      } else {
        result.status = RequestStatus.Error;
        result.message = `Error fetching Area Name: ${httpResponse.statusText}`;
      }
    } catch (e) {
      result.status = RequestStatus.Error;
      result.message = `Unknown exception fetching Area Name: ${e}`;
    }
    return result;
  }
}
