import LookupRequest from "@/models/LookupRequest";
import LookupResponse from "@/models/LookupResponse";

export default interface IHealthServiceArea {
  getAreaName(request: LookupRequest): Promise<LookupResponse>;
}
