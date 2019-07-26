import * as bodyParser from "body-parser";
import * as express from "express";
import { ExampleHandler } from "./routes/example_handler";

const serverLogger = console;
const app = express();

const addRoutes = async () => {
    try {

        app
            .use(bodyParser.urlencoded({ "extended": false }))
            .use(bodyParser.json())
            .use("/api/v1/example", ExampleHandler());
    
    } catch (err) {
        serverLogger.dir(err);
    }
};

addRoutes();

export default app;
