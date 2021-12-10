import BaseResponse from "./BaseResponse";
import CommunityHealthServiceAreaName from "./CommunityHealthServiceAreaName";

export default class LookupResponse extends BaseResponse<CommunityHealthServiceAreaName> {
    getAreaName = () => this.data?.CMNTY_HLTH_SERV_AREA_NAME;
}
