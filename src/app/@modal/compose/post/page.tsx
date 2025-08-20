"use client";

import Share from "@/components/Share";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-slate-800 bg-opacity-50 flex justify-center items-start py-16 px-4">
      <div className="bg-black rounded-xl p-4">
        <button onClick={router.back} className="px-5 mb-4 cursor-pointer">
          X
        </button>
        <Share />
      </div>
    </div>
  );
};
export default PostModal;
