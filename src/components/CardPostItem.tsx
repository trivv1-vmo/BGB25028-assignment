import { CardType } from "@/types/card.type";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

interface CardPostItemProps {
  data: CardType;
}

const CardPostItem = ({ data }: CardPostItemProps) => {
  return (
    <div className="border border-border rounded-xl p-4 w-full">
      <Link href={data.url} className="w-full h-[240px]">
        <Image
          className="w-full h-[240px] object-cover rounded-md"
          src={data?.image}
          alt="post"
          width={360}
          height={240}
        />
      </Link>
      <div className="bg-[#4B6BFB0D] py-1 px-3 rounded inline-block mt-6">
        <span className="text-sm font-medium text-blue">{data?.catalog}</span>
      </div>
      <Link href={data.url} className="mt-4 block">
        <h3 className="lg:text-2xl font-semibold text-primary leading-6 line-clamp-2 h-12 lg:h-16">
          {data?.title}
        </h3>
      </Link>
      <div className="mt-5 flex items-center">
        <div className="w-9 h-9 rounded-full">
          <Image
            src={data.avatar}
            className="rounded-full object-cover w-full h-full"
            alt="avatar"
            width={36}
            height={36}
          />
        </div>
        <p className="ml-3 font-medium text-text text-sm lg:text-base">{data?.name}</p>
        <p className="ml-5 text-secondary text-sm lg:text-base">
          {moment(data?.date).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default CardPostItem;
