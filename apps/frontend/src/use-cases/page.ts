import { getPageBySlug, getPages } from "@/data-access/page";
import type { Page } from "@/data-access/page/type";
import { NotFoundError, PublicError } from "./error";

export async function getPagesUseCase(): Promise<Page[]> {
  const pages = await getPages();

  if (!pages) {
    throw new NotFoundError();
  }

  return pages || [];
}

export async function getPageBySlugUseCase(slug: string): Promise<Page> {
  const page = await getPageBySlug(slug);

  if (!page) {
    throw new PublicError("Page not found");
  }

  return page;
}
