"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  //   const description = formData.get("description") as string;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  let pre = "w-600";
  if (settings.type === "square") {
    pre = "w-600,ar-1-1";
  }
  if (settings.type === "wide") {
    pre = "w-600,ar-16-9";
  }

  imagekit.upload({
    file: buffer,
    fileName: file.name,
    folder: "/posts",
    ...(file.type.includes("image") && {
      transformation: {
        pre,
      },
    }),
    customMetadata: {
      sensitive: settings.sensitive,
    },
  });
};
