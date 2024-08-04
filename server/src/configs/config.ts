import dotenv from "dotenv";

dotenv.config();

const MONGO_URI: string | undefined = (process.env.NODE_ENV = "dev"
  ? process.env.MONGODB_URI_DEV
  : process.env.MONGODB_URI_PROD) as string;

const PORT = process.env.PORT || 8081;

const config = { MONGO_URI, PORT };

export default config;