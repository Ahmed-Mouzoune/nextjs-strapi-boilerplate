import { Suspense } from "react";
import Hero from "./_layouts/hero";
import ArticleList, {
  ArticleListLoading,
} from "./articles/_components/article-list";
import PageList from "./shared/page/page-list";

export default function Home() {
  return (
    <main className="space-y-24 pb-24">
      <Hero />

      <PageList />

      <Suspense fallback={<ArticleListLoading />}>
        <ArticleList />
      </Suspense>
    </main>
  );
}
