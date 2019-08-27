import { Request, Response } from "express";
import { AsyncRouter } from "express-async-router";
import { insert } from "../repositories/repository";
import { Preference } from "../entities/Preference";


export const RestApiHandler = () => {

    const router = AsyncRouter();

    router.get("/health", async (req: Request, res: Response) => {
        const json = {
            "status": "up",
        };
        res.setHeader("Content-Type", "application/json");
        res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
        res.header("Expires", "-1");
        res.header("Pragma", "no-cache");
        res.send(JSON.stringify(json, null, 4));
    });

    router.post("/preferences", async (req: Request, res: Response) => {
        let preference = new Preference();
        preference.primaryEmail = req.body.primaryEmail;
        preference.secondaryEmail = req.body.secondaryEmail;
        preference.primaryEmailCheckbox = req.body.primaryEmailCheckbox;
        preference.secondaryEmailCheckbox = req.body.secondaryEmailCheckbox;
        preference.deviceTrackingCheckbox = req.body.deviceTrackingCheckbox;
        var result = await insert(preference);
        res.send({ id: result.id } );
    });

    return router;
};
