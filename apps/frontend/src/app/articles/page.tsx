import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import ArticleCreate from "./_components/article-create";
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

        <Drawer>
          <DrawerTrigger>
            <span>Create an article</span>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Create an article</DrawerTitle>
            </DrawerHeader>

            <ArticleCreate />
          </DrawerContent>
        </Drawer>
      </div>
    </main>
  );
}
