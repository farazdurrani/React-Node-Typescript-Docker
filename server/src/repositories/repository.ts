import "reflect-metadata";
import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { Preference } from "../entities/Preference";

var dbConnection: Connection;

export const insert = async (photo) => {
    if (dbConnection) {
        return dbConnection.manager.save(photo);
    } else {
        dbConnection = await getConnection();
        return await dbConnection.manager.save(photo);
    }
}

const options: ConnectionOptions = {
    type: "sqlite",
    database: "test",
    entities: [
        Preference
    ],
    synchronize: true,
    logging: false
};

const getConnection = async () => {
    return await createConnection(options);
};