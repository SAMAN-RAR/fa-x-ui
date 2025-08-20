import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black bg-opacity-75">
        <Link href="/">
          <Image
            className="rotate-180"
            src="icons/back.svg"
            alt="بازگشت"
            width={24}
            height={24}
          />
        </Link>
        <h1 className="font-bold text-lg">Saman Faraji</h1>
      </div>
      <div>
        <div className="relative w-full">
          <div className="w-full aspect-[3/1] relative">
            <Image
              src="general/cover.jpg"
              alt=""
              width={600}
              height={200}
              tr={true}
            />
          </div>
          <div className="w-1/5 aspect-square absolute right-4 -translate-y-1/2 rounded-full overflow-hidden border-4 border-black bg-gray-300">
            <Image
              src="general/avatar.png"
              alt="Saman Faraji"
              width={100}
              height={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-100 items-center justify-end gap-3 py-2 px-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image src="icons/more.svg" alt="more" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              src="icons/explore.svg"
              alt="explore"
              width={20}
              height={20}
            />
          </div>{" "}
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              src="icons/message.svg"
              alt="message"
              width={20}
              height={20}
            />
          </div>
          <button className="py-2 px-4 bg-white  text-black font-bold rounded-full">
            دنبال کردن
          </button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="">
            <h2 className="text-2xl font-bold">Saman Faraji</h2>
            <span className="text-sm text-textGray">@Saman.rar</span>
          </div>
          <p>Saman Farji Practice Website</p>
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-1">
              <Image
                src="icons/userLocation.svg"
                width={24}
                height={24}
                alt="User Location"
              />
              <span>IRAN</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="icons/date.svg"
                width={24}
                height={24}
                alt="Joined Date"
              />
              <span>تاریخ پیوستن 21 آوریل</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">دنبال کنندگان</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">200</span>
              <span className="text-textGray text-[15px]">دنبال شوندگان</span>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </div>
  );
};
export default UserPage;
