const env = process.env.REACT_APP_ENV || "local";

const test = {
    "key1": null
};

const local = {
    "key1": "Local Development Configuration"
};

const dev = {
    "key1": null
};

const sbx = {
    "key1": null
};

const qa = {
    "key1": null
};

const uat = {
    "key1": null
};

const prod = {
    "key1": null
};

export const config = {
    "dev": dev,
    "local": local,
    "prod": prod,
    "qa": qa,
    "sbx": sbx,
    "test": test,
    "uat": uat,
};

export default config[env];
