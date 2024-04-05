import { v4 as uuid, v4 } from "uuid";

export const generateId = () => {
  return uuid().replaceAll("-", "");
};
