import { ImageEnum } from "@/assets";
import { Button } from "@/components/ui/button";
import { PATHS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-80">
      <div className="w-[262px] lg:w-[462px] lg:h-[432px]">
        <Image
          className="w-full h-full"
          src={ImageEnum.logo404}
          alt="404"
          width={462}
          height={432}
        />
      </div>
      <p className="text-blue font-bold text-xl lg:text-3xl text-center">404 Not Found</p>
      <h3 className="text-primary mt-4 text-2xl lg:text-5xl font-bold text-center">
        Whoops! That page doesn’t exist.
      </h3>
      <Link href={PATHS.ROOT}>
        <Button className="mt-8">
          <span className="text-background">Home page</span>
        </Button>
      </Link>
    </div>
  );
};

export default Page404;
