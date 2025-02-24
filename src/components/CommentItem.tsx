import Image from "next/image";
import { getTimeDifference } from "@/utils";

interface CommentItemProps {
  comment: CommentItem;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="pb-6 border-b border-border mb-4">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full">
          <Image
            src={comment.avatar}
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full w-6 h-6 sm:w-9 sm:h-9 object-cover"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-primary font-semibold">{comment.name}</p>
          <div className="w-1 h-1 bg-border rounded-full"></div>
          <p className="text-sm text-secondary">{getTimeDifference(comment.createAt)}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <div className="w-9"></div>
        <p className="text-text text-sm w-[90%]">{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentItem;
