import Link from "next/link";
import Recommendation from "./Recommendation";
import Search from "./Search";
import Tags from "./Tags";

const LeftBar = () => {
  return (
    <div className="flex pt-4 flex-col gap-4 sticky top-0 h-max px-2">
      <Search />
      <Tags />
      <Recommendation />
      <div className="text-textGray text-sm flex gap-5 flex-wrap">
        <Link href="/">شرایط استفاده</Link>
        <Link href="/">سیاست های مربوط به حریم شخصی</Link>
        <Link href="/">سیاست های کوکی ها</Link>
        <Link href="/">دسترسی پذیری</Link>
        <Link href="/">بیشتر</Link>
        <span>&copy; Saman.rar Corp</span>
      </div>
    </div>
  );
};
export default LeftBar;
