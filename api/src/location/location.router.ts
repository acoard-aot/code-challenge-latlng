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
locationRouter.get("/point/:lat/:long", async(req: Request, res: Response) => {

    try {
        let CMNTY_HLTH_SERV_AREA_NAME: string = " ";

        const lat = parseFloat(req.params.lat);
        const long = parseFloat(req.params.long);

        CMNTY_HLTH_SERV_AREA_NAME = await LocationService.getLocationfromCordinates(lat, long);
        console.log(" CMNTY_HLTH_SERV_AREA_NAME :" + CMNTY_HLTH_SERV_AREA_NAME)
        
        if (CMNTY_HLTH_SERV_AREA_NAME) {
            return res.status(200).send({ "CMNTY_HLTH_SERV_AREA_NAME": CMNTY_HLTH_SERV_AREA_NAME });
        }    
    } catch (err) {
        return res.status(200).send({ "CMNTY_HLTH_SERV_AREA_NAME": " " });
        
    }

});


