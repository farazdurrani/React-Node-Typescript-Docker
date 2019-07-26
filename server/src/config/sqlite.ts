const env = process.env.NODE_ENV;

const local = {
    "key": "value"
};

const sbx = {
    "key": "value"
};

const dev = {
    "key": "value"
};

const qa = {
    "key": "value"
};

const uat = {
    "key": "value"
};

const stg = {
    "key": "value"
};

const prod = {
    "key": "value"
};

const config = {
    "dev": dev,
    "local": local,
    "prod": prod,
    "qa": qa,
    "sbx": sbx,
    "stg": stg,
    "uat": uat,
};

export default config[env];
