import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    FOLDER_LOGS: str(),
  });
};

export default validateEnv;
