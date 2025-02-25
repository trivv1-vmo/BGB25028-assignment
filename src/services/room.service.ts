import { API_URL } from "@/config";
import { ENDPOINT_ROOM } from "@/constants";
import HttpService from "@/libs/axios";

const httpService = new HttpService(API_URL);

export const roomService = {
  async getRoomList(query: { page: number; limit: number; type: string }) {
    return await httpService.get(ENDPOINT_ROOM.getList, query);
  },

  async getProductPrice(id: string) {
    return await httpService.get(ENDPOINT_ROOM.getProductPrice(id));
  },
};
