import { API_URL } from "@/config";
import { ENDPOINT_BLOG } from "@/constants";
import HttpService from "@/libs/axios";

const httpService = new HttpService(API_URL);

export const blogService = {
  async getBlogList(query: { page: number; limit: number }) {
    return await httpService.get(ENDPOINT_BLOG.getList, query);
  },

  async getBlogDetail(slug: string) {
    return await httpService.get(ENDPOINT_BLOG.getDetail(slug));
  }
}