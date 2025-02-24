export const ENDPOINT_BLOG = {
  getList: '/blog/get-all',
  getDetail: (slug: string) => `/blog/${slug}`,
}

export const ENDPOINT_COMMENT = {
  getList: (idBlog: string) => `/comment/get-all-comment-blog/${idBlog}`,
  create: (idBlog: string) => `/comment/create/${idBlog}`,
}