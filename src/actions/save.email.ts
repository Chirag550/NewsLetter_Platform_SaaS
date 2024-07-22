"use server";

import Email from "@/models/email.model";
import { connectDb } from "@/shared/libs/db";

export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({ title, newsLetterOwnerId });

    if (email) {
      await Email.findByIdAndUpdate(email._id, { content });
      return { message: "Email saved Succesfully" };
    } else {
      await Email.create({
        title,
        content,
        newsLetterOwnerId,
      });
      return { message: "Email saved Succesfully" };
    }
  } catch (error) {
    console.log(error);
  }
};
