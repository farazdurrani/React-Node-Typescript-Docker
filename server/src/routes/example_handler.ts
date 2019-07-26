import { Request, Response } from "express";
import { AsyncRouter } from "express-async-router";

export const ExampleHandler = () => {

    const router = AsyncRouter();

    router.get("/", async (req: Request, res: Response) => {
        const json = {
            "error": null,
            "results": null,
        };
        res.setHeader("Content-Type", "application/json");
        res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
        res.header("Expires", "-1");
        res.header("Pragma", "no-cache");
        
        res.send(JSON.stringify(json, null, 4));
    });

    return router;
};
