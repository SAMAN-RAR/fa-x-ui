"use client";

import { ChangeEvent, useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewUrl = media && URL.createObjectURL(media);

  let imageClasses;
  if (settings.type === "original") {
    imageClasses = "h-full";
  }

  if (settings.type === "square") {
    imageClasses = "w-full object-cover aspect-square";
  }

  if (settings.type === "wide") {
    imageClasses = "aspect-video";
  }

  return (
    <form
      action={(formData) => shareAction(formData, settings)}
      className="p-4 flex gap-4 "
    >
      <div>
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.png"
            alt="dev with alireza"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <input
          name="description"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          type="text"
          placeholder="چه خبر؟"
        />
        {media?.type.startsWith("image") && previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              className={`${imageClasses}`}
              src={previewUrl}
              alt="selected media"
              width={600}
              height={600}
            />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setEditorOpen(true)}
            >
              ویرایش
            </div>
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white w-8 h-8 flex justify-center items-center rounded-full"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.startsWith("video") && previewUrl && (
          <div className="relative">
            <video src={previewUrl} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {editorOpen && previewUrl && (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              accept="image/*,video/*"
              name="file"
              className="hidden"
              id="file"
              type="file"
              onChange={fileChangeHandler}
            />
            <label htmlFor="file">
              <Image
                src="icons/image.svg"
                alt="image"
                width={20}
                height={20}
                className="cursor-pointer"
              />{" "}
            </label>
            <Image
              src="icons/gif.svg"
              alt="gif"
              width={20}
              height={20}
              className="cursor-pointer"
            />{" "}
            <Image
              src="icons/poll.svg"
              alt="poll"
              width={20}
              height={20}
              className="cursor-pointer"
            />{" "}
            <Image
              src="icons/emoji.svg"
              alt="emoji"
              width={20}
              height={20}
              className="cursor-pointer"
            />{" "}
            <Image
              src="icons/schedule.svg"
              alt="schedule"
              width={20}
              height={20}
              className="cursor-pointer"
            />{" "}
            <Image
              src="icons/location.svg"
              alt="location"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black rounded-full py-2 px-4 font-semibold">
            پست کردن
          </button>
        </div>
      </div>
    </form>
  );
};
export default Share;
