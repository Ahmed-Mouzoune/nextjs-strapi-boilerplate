import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import ArticleList, { ArticleListLoading } from "./_components/article-list";

export default function PageRoot() {
  return (
    <main className="container space-y-3">
      <Suspense fallback={<ArticleListLoading />}>
        <ArticleList />
      </Suspense>

      <form
        className="mx-auto flex justify-between gap-5"
        // action={createArticleUseCase}
      >
        <Button asChild>
          <Link href="/articles">View all articles</Link>
        </Button>

        <Button type="submit">Create an article</Button>
      </form>
    </main>
  );
}
