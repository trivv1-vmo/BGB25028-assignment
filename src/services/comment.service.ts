import { API_URL } from "@/config";
import { ENDPOINT_COMMENT } from "@/constants";
import HttpService from "@/libs/axios";

const httpService = new HttpService(API_URL);

export const commentService = {
  async getCommentList(idBlog: string, query: { page: number; limit: number }) {
    return await httpService.get(ENDPOINT_COMMENT.getList(idBlog), query);
  },

  async createComment(idBlog: string, data: { content: string }) {
    return await httpService.post(ENDPOINT_COMMENT.create(idBlog), data);
  }
}