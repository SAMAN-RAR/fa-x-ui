import Image from "./Image";

const Tags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-6">
      <h2 className="text-xl font-bold text-textGrayLight">
        چیزهایی که دارد رخ میدهد
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="font-sm text-textGray">جاوا اسکریپت</span>
          <h3 className="text-textGrayLight font-bold">React JS</h3>
          <span className="text-textGray text-sm">20 هزارتا پست</span>
        </div>
        <div className="hover:bg-slate-700 rounded-full p-1">
          <Image src="icons/infoMore.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="font-sm text-textGray">جاوا اسکریپت</span>
          <h3 className="text-textGrayLight font-bold">React JS</h3>
          <span className="text-textGray text-sm">20 هزارتا پست</span>
        </div>
        <div className="hover:bg-slate-700 rounded-full p-1">
          <Image src="icons/infoMore.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="font-sm text-textGray">جاوا اسکریپت</span>
          <h3 className="text-textGrayLight font-bold">React JS</h3>
          <span className="text-textGray text-sm">20 هزارتا پست</span>
        </div>
        <div className="hover:bg-slate-700 rounded-full p-1">
          <Image src="icons/infoMore.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="font-sm text-textGray">جاوا اسکریپت</span>
          <h3 className="text-textGrayLight font-bold">React JS</h3>
          <span className="text-textGray text-sm">20 هزارتا پست</span>
        </div>
        <div className="hover:bg-slate-700 rounded-full p-1">
          <Image src="icons/infoMore.svg" alt="" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};
export default Tags;
