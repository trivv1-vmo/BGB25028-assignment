import { ImageEnum } from "@/assets";
import Image from "next/image";
import Comment from "./components/Comment";
import { blogService } from "@/services";
import { ResponseBlogItem } from "@/types/card.type";
import { API_IMAGE } from "@/config";
import moment from "moment";
import Page404 from "@/layouts/404";
// import { Metadata } from "next";
export type paramsType = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: paramsType }) {
  const { slug } = await props.params;
  if (!slug) {
    return {
      title: "Chi tiết blog",
      description: "Xem thêm về bài viết này.",
    };
  }

  try {
    const blogDetail = await blogService.getBlogDetail(slug);

    return {
      title: blogDetail?.data?.title || "Chi tiết blog",
      description: blogDetail?.data?.excerpt || "Xem thêm về bài viết này.",
    };
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return {
      title: "Chi tiết blog",
      description: "Xem thêm về bài viết này.",
    };
  }
}

const BlogDetailPage = async (props: { params: paramsType }) => {
  const { slug } = await props.params;

  const res = await blogService.getBlogDetail(slug);

  if (!res.data) {
    return <Page404 />;
  }

  const blogDetail: ResponseBlogItem = res.data;

  return (
    <div className="w-full sm:w-[65%] m-auto">
      <div className="bg-blue py-1 px-3 rounded inline-block">
        <span className="text-sm font-medium text-primary-foreground">
          {blogDetail?.catalog}
        </span>
      </div>

      <h1 className="text-2xl sm:text-4xl font-semibold text-primary mt-4">
        {blogDetail?.title}
      </h1>

      <div className="mt-5 flex items-center rounded-full">
        <Image
          className="rounded-full w-9 h-9"
          src={`${API_IMAGE}/${blogDetail?.user_image}` || ImageEnum.avatar1}
          alt="avatar"
          width={36}
          height={36}
        />
        <p className="ml-3 font-medium text-text">{blogDetail?.user_name}</p>
        <p className="ml-5 text-secondary">
          {moment(blogDetail?.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>

      <div className="mt-8 w-full aspect-[17/10] rounded-xl">
        <Image
          className="rounded-xl"
          src={`${API_IMAGE}/${blogDetail?.image}` || "ImageEnum.banner"}
          alt="image"
          width={1280}
          height={450}
        />
      </div>

      <div
        className="mt-8 prose dark:prose-dark w-full text-text"
        dangerouslySetInnerHTML={{ __html: blogDetail.content }}
      />

      <Comment idBlog={blogDetail?._id} />
    </div>
  );
};

export default BlogDetailPage;
