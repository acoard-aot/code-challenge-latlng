import axios, { AxiosResponse } from "axios";



type GeoServerResponse = {
    features: { properties: { "CMNTY_HLTH_SERV_AREA_NAME": string } }[];

};

export const getLocationfromCordinates = async (latitude: string, longitude: string): Promise<String> => {

    let CMNTY_HLTH_SERV_AREA_NAME: string = " ";
    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);

    const url = encodeURI(`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}+${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`);
        //`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub%3AWHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG%3A4326&cql_filter=INTERSECTS(SHAPE%2CSRID%3D4326%3BPOINT(${long}+${lat})&propertyName=CMNTY_HLTH_SERV_AREA_CODE%2CCMNTY_HLTH_SERV_AREA_NAME&outputFormat=application%2Fjson`;

    axios
        .get<GeoServerResponse>(url)
        .then(response => {
            
            if (response.data.features === undefined || response.data.features.length == 0 ) {
                throw new Error("Could not fetch location!");
            }
            
            let CMNTY_HLTH_SERV_AREA_NAME = response.data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME; 
            console.log("CMNTY_HLTH_SERV_AREA_NAME::" + CMNTY_HLTH_SERV_AREA_NAME);
            
        })
        .catch(err => {
            console.log(err.message);


        });

    return CMNTY_HLTH_SERV_AREA_NAME;
} 

export function makeGetRequest(latitude: string, longitude: string) {
    return new Promise(function (resolve, reject) {
        let CMNTY_HLTH_SERV_AREA_NAME: string = " ";
        const lat = parseFloat(latitude);
        const long = parseFloat(longitude);

        const url = encodeURI(`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}+${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`);
        axios.get<GeoServerResponse>(url).then(
            (response) => {
                var result = response.data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
                console.log('Processing Request' + result);
                //return result;
                resolve(result);
            },
            (error) => {
                reject(error);
            }
        );
    });
}



export function searchAddressHandler(latitude: string, longitude: string) {

    let CMNTY_HLTH_SERV_AREA_NAME: string = " ";
    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);

    const url = encodeURI(`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}+${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`);
        //`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub%3AWHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG%3A4326&cql_filter=INTERSECTS(SHAPE%2CSRID%3D4326%3BPOINT(${long}+${lat})&propertyName=CMNTY_HLTH_SERV_AREA_CODE%2CCMNTY_HLTH_SERV_AREA_NAME&outputFormat=application%2Fjson`;

    axios
        .get<GeoServerResponse>(url)
        .then(response => {

            if (response.data.features === undefined || response.data.features.length == 0) {
                throw new Error("Could not fetch location!");
            }

            let CMNTY_HLTH_SERV_AREA_NAME = response.data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
            console.log("CMNTY_HLTH_SERV_AREA_NAME::" + CMNTY_HLTH_SERV_AREA_NAME);
            

        })
        .catch(err => {
            console.log(err.message);


        });
    return CMNTY_HLTH_SERV_AREA_NAME;
    
}