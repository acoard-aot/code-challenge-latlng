import { RequestStatus } from "./RequestStatus";

export default abstract class BaseResponse<T> {
  status: RequestStatus = RequestStatus.None;
  data?: T;
  message?: string;
}
