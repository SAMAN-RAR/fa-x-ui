import Image from "./Image";
import PostActions from "./PostActions";
import PostInfo from "./PostInfo";
import { imagekit } from "../utils";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  heigth: number;
  filPath: string;
  url: string;
  fileType: string;
  customMetadata?: {
    sensitive: boolean;
  };
}

const Post = async () => {
  const getFileDetails = async (fileId: string) => {
    const res = await fetch("http://localhost:3000/api/imagekit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileId: fileId }),
    });

    const data = await res.json();

    return data;
  };

  const { fileDetails } = await getFileDetails("68a3bfce5c7cd75eb891a648");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-textGray"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Saman بازپست کرد</span>
      </div>
      <div className="flex gap-4 ">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.png"
            alt="dev with alireza"
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1 flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center flex-wrap gap-2">
              <h2 className="font-bold text-md">Saman Faraji</h2>
              <span className="text-textGray">@Saman.rar</span>
              <span className="text-textGray">1 روز پیش</span>
            </div>
            <PostInfo />
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          </p>
          {fileDetails && fileDetails.fileType === "image" ? (
            <div className="mt-6 rounded-lg overflow-hidden">
              <Image
                sensitive={fileDetails.customMetadata.sensitive}
                src={fileDetails.filePath}
                width={fileDetails.width}
                height={fileDetails.height}
                alt=""
              />
            </div>
          ) : (
            <Video
              src={fileDetails.filePath}
              sensitive={fileDetails.customMetadata.sensitive}
            />
          )}
          <PostActions />
        </div>
      </div>
    </div>
  );
};
export default Post;
