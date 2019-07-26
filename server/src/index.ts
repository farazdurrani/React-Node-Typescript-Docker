import app from "./app";

const port = "3100";
const serverLogger = console;

app.listen(port, () => {
    serverLogger.info("Express Is Running on Port " + port);
});
