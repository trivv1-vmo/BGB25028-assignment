export type CardType = {
  image: string;
  catalog: string;
  title: string;
  avatar: string;
  name: string;
  date: string;
  url: string;
};

interface ResponseBlogItem {
  _id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  catalog: string;
  user_name: string;
  user_image: string;
  createdAt: string;
  updatedAt: string;
}
