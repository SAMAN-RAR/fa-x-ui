import Image from "./Image";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image
        src="icons/infoMore.svg"
        width={16}
        height={16}
        alt="more info icon"
      />
    </div>
  );
};
export default PostInfo;
