import * as bodyParser from "body-parser";
import * as express from "express";
import { RestApiHandler } from "./routes/route_handler";

const serverLogger = console;
const app = express();

const addRoutes = async () => {
    try {

        app
            .use(bodyParser.urlencoded({ "extended": false }))
            .use(bodyParser.json())
            .use("/api", RestApiHandler());

    } catch (err) {
        serverLogger.dir(err);
    }
};

addRoutes();

export default app;