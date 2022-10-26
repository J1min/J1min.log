import instance from "../../lib/instance";
import { ScriptResponseType } from "../../interface/script";

export const getRandomScript = async (): Promise<ScriptResponseType> => {
  try {
    const {data} = await instance.get(`/script/random`);
    return data;
  } catch (err) {
    throw err;
  }
};
