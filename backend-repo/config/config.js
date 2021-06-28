const { env } = process;

const config = {
  env: env.NODE_ENV || "development",
};

const devConfig = {
  db: env.DB_CONNECTION_DEV,
  jwt_key: env.SECRET_KEY_DEV,
};

const prodConfig = {
  db: env.DB_CONNECTION_PROD,
  jwt_key: env.SECRET_KEY_PROD,
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;
console.log("OUR ENVIROMENT SETUP IS:", config.env);
console.log(currentConfig);

module.exports = Object.assign({}, config, currentConfig);
