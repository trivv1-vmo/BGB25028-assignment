"use client";

import { ImageEnum } from "@/assets";
import CommentItem from "@/components/CommentItem";
import CommentItemSkeleton from "@/components/CommentItemSkeleton";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Textarea } from "@/components/ui/textarea";
import { API_IMAGE } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { commentService } from "@/services";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CommentProps {
  idBlog: string;
}

const Comment = ({ idBlog }: CommentProps) => {
  const { toast } = useToast();

  const [listComment, setListComment] = useState<CommentItem[]>([]);
  const [meta, setMeta] = useState<Meta>();
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [textInput, setTextInput] = useState<string>("");

  useEffect(() => {
    if (idBlog) {
      handleGetComment();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idBlog, page]);

  const handleGetComment = async () => {
    try {
      const res = await commentService.getCommentList(idBlog, {
        page: page,
        limit: 3,
      });

      if (res.data) {
        const dataComment = res.data.data.map((item: ResponseCommentItem) => {
          return {
            name: item.user_name,
            body: item.content,
            avatar: `${API_IMAGE}/${item.user_image}`,
            createAt: item.createdAt,
          };
        });

        if (page === 1) {
          setListComment(dataComment);
        } else {
          if (listComment) {
            const newData = [
              ...JSON.parse(JSON.stringify(listComment)),
              ...dataComment,
            ];
            setListComment(newData);
          }
        }

        setMeta(res.data.meta);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  const handlePostComment = async () => {
    try {
      const res = await commentService.createComment(idBlog, {
        content: textInput,
      });

      if (res.data) {
        setTextInput("");
        const newData = {
          name: res.data.user_name,
          body: res.data.content,
          avatar: `${API_IMAGE}/${res.data.user_image}`,
          createAt: res.data.createdAt,
        };

        setListComment([newData, ...JSON.parse(JSON.stringify(listComment))]);

        toast({
          title: "Success",
          description: "Comment successfully",
          variant: "success",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-8">
      <Divider />
      <div className="mt-4 border border-solid border-border rounded-lg p-4 pb-2">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full">
            <Image
              src={ImageEnum.avatar2}
              alt="avatar"
              className="w-9 h-9 rounded-full"
              width={36}
              height={36}
            />
          </div>
          <Textarea
            className="border-none p-0 focus-visible:ring-0 min-h-2 text-sm sm:text-base"
            placeholder="Add a comment"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-2">
          <Button
            disabled={textInput === ""}
            onClick={() => handlePostComment()}
          >
            <span className="text-background text-sm sm:text-base">Post</span>
          </Button>
        </div>
      </div>

      <p className="text-primary mt-6">
        <span className="font-semibold">{listComment?.length}</span> comment
      </p>
      <div className="mt-4">
        {listComment &&
          listComment.map((comment, index) => {
            return <CommentItem key={index} comment={comment} />;
          })}
        {loading && <CommentItemSkeleton />}

        {meta && page < meta.totalPages && (
          <div className="flex justify-center mt-5">
            <Button
              variant="outline"
              onClick={() => {
                handleLoadMore();
              }}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
