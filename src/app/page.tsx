import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className=" px-4 pt-4 justify-between flex text-textGray font-bold border-b-[1px] border-textGray">
        <Link
          className="pb-3 flex flex-1  items-center justify-center border-b-4 border-iconBlue"
          href="/"
        >
          برای شما
        </Link>
        <Link className="pb-3 flex flex-1 items-center justify-center" href="/">
          دنبال شده
        </Link>
      </div>
      <Share />
      <Feed />
    </>
  );
};

export default Homepage;
