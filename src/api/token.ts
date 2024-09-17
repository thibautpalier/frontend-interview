import { sleep } from "@/api/utils";
import { SHARING_TOKEN } from "@/data/token";

export const getSharingToken = async () => {
  await sleep(1000);
  return SHARING_TOKEN;
};
