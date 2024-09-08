"use server";

import { articleCreateSchema } from "@/data-access/article/type";
import { createArticleUseCase } from "@/use-cases/article";
import { middlewareAction } from "@lib/safe-action";
import { revalidatePath } from "next/cache";

export const createArticleAction = middlewareAction
  .createServerAction()
  .input(articleCreateSchema)
  .handler(async ({ input }) => {
    await createArticleUseCase({
      title: input.title,
      description: input.description,
      author: input.author,
    });
    revalidatePath("/articles/create");
  });
