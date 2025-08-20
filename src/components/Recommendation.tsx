import Image from "./Image";

const Recommendation = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-6">
      <div className="flex justify-between items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="general/avatar.png"
              alt="Saman"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div>
            <h2 className="text-md font-bold">Saman Faraji</h2>
            <span className="text-textGray text-sm ">@Saman.rar</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full text-sm">
          دنبال کردن
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="general/avatar.png"
              alt="Saman"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div>
            <h2 className="text-md font-bold">Saman Faraji</h2>
            <span className="text-textGray text-sm ">@Saman.rar</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full text-sm">
          دنبال کردن
        </button>
      </div>{" "}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              src="general/avatar.png"
              alt="Saman"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div>
            <h2 className="text-md font-bold">Saman Faraji</h2>
            <span className="text-textGray text-sm ">@Saman.rar</span>
          </div>
        </div>
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full text-sm">
          دنبال کردن
        </button>
      </div>
    </div>
  );
};
export default Recommendation;
