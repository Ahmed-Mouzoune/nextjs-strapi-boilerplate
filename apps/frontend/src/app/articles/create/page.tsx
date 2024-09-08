import { Headline } from "@/components/ui/headline";
import ArticleCreate from "../_components/article-create";

export default function ArticleCreatePage() {
  return (
    <main className="container space-y-3">
      <Headline variant={"h1"}>Create an article</Headline>

      <ArticleCreate />
    </main>
  );
}
