import { Button } from "@components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import ArticleList, { ArticleListLoading } from "./_components/article-list";

export default function PageRoot() {
  return (
    <main className="container space-y-3">
      <Suspense fallback={<ArticleListLoading />}>
        <ArticleList />
      </Suspense>

      <div className="mx-auto flex justify-center gap-5">
        <Button asChild>
          <Link href="/articles">View all articles</Link>
        </Button>

        <Button asChild>
          <Link href={"/articles/create"}>Create an article</Link>
        </Button>
      </div>
    </main>
  );
}
