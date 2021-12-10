/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as LocationService from "./location.service";
import axios, { AxiosResponse } from "axios";

type GeoServerResponse = {
    features: { properties: { "CMNTY_HLTH_SERV_AREA_NAME": string } }[];

};

/**
 * Router Definition
 */

export const locationRouter = express.Router();

/**
 * Controller Definitions
 */


// GET location /point/:lat/:long

locationRouter.get("/point/:lat/:long", (req: Request, res: Response) => {
    
    let CMNTY_HLTH_SERV_AREA_NAME: string = " ";
    const lat = parseFloat(req.params.lat);
    const long = parseFloat(req.params.long);
    
    const url = encodeURI(`https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pub:WHSE_ADMIN_BOUNDARIES.BCHA_CMNTY_HEALTH_SERV_AREA_SP&srsname=EPSG:4326&cql_filter=INTERSECTS(SHAPE,SRID=4326;POINT(${long}+${lat}))&propertyName=CMNTY_HLTH_SERV_AREA_CODE,CMNTY_HLTH_SERV_AREA_NAME&outputFormat=application/json`);

    axios
        .get<GeoServerResponse>(url)
        .then(response => {

            if (response.data.features === undefined || response.data.features.length == 0) {
                throw new Error("Could not fetch location!");
            }
            let CMNTY_HLTH_SERV_AREA_NAME = response.data.features[0].properties.CMNTY_HLTH_SERV_AREA_NAME;
            return res.status(200).send({ "CMNTY_HLTH_SERV_AREA_NAME": CMNTY_HLTH_SERV_AREA_NAME });
        })
        .catch(err => {
            
            return res.status(200).send({ "CMNTY_HLTH_SERV_AREA_NAME": " " });


        });


});


