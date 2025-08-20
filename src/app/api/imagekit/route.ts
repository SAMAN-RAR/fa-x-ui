import { imagekit } from "@/utils";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fileId } = body;

    if (!fileId) {
      return NextResponse.json(
        { message: "fileId is required" },
        { status: 400 }
      );
    }

    // تبدیل callback به Promise
    const result = await new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });

    return NextResponse.json({ fileDetails: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Getting media failed!", error: error.message },
      { status: 500 }
    );
  }
}
