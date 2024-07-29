import * as dotenv from "dotenv";

dotenv.config();

const serverUrl = process.env.SERVER_URL;

export { serverUrl };
