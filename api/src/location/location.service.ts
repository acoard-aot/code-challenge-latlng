import axios, { AxiosResponse } from "axios";

type GeoServerResponse = {
    features: { properties: { "CMNTY_HLTH_SERV_AREA_NAME": string } }[];

};

export async function getLocationfromCordinates(latitude: number, longitude: number):Promise<string> {
    var location: string = "";
    const url = encodeURI(`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${longitude}+${latitude}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`);

    let res = await axios
        .get<GeoServerResponse>(url)
        .then(response => {
            if (response.data.features === undefined || response.data.features.length == 0) {
                throw new Error("Could not fetch location!");
            }
            const CMNTY_HLTH_SERV_AREA_NAME = response.data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
            location = CMNTY_HLTH_SERV_AREA_NAME;

        })
        .catch(err => {
            throw new Error(err.message);
            
        });
    //I'd be in console.log("location fetched:  " + location);
    return location;
}



