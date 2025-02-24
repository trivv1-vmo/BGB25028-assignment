interface CommentItem {
  name: string;
  body: string;
  avatar: string;
  createAt: string;
}

interface ResponseCommentItem {
  _id: string;
  content: string;
  blog_id: string;
  user_name: string;
  user_image: string;
  createdAt: string;
  updatedAt: string;
}
