/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as LocationService from "./location.service";

/**
 * Router Definition
 */

export const locationRouter = express.Router();

/**
 * Controller Definitions
 */



// GET location /bpoint/:lat/:long

locationRouter.get("/bpoint/:lat/:long", async (req: Request, res: Response) => {

    try {
        const latitude: number = parseInt(req.params.one, 12);
        const longitude: number = parseInt(req.params.two, 12)
        const CMNTY_HLTH_SERV_AREA_NAME: String = await LocationService.find(latitude, longitude);

        if (CMNTY_HLTH_SERV_AREA_NAME) {
            return res.status(200).send(CMNTY_HLTH_SERV_AREA_NAME);
        }

        res.status(404).send("item not found");
    } catch (e) {
       // res.status(500).send(e.message);
    }
});


