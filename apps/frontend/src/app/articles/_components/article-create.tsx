"use client";

import { articleCreateSchema } from "@/data-access/article/type";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { LoaderButton } from "@components/ui/loader-button";
import { Textarea } from "@components/ui/textarea";
import { toast } from "@components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useServerAction } from "zsa-react";
import { createArticleAction } from "../actions";

export default function ArticleCreate() {
  const form = useForm<z.infer<typeof articleCreateSchema>>({
    resolver: zodResolver(articleCreateSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
    },
  });

  const { execute, isPending } = useServerAction(createArticleAction, {
    onSuccess() {
      console.log(">log: Article created successfuly");
      toast({
        title: `Article created successfully`,
        variant: "success",
      });
    },
    onError({ err }) {
      console.log(">log: Article failed", err);
      toast({
        title: `Oops, an error occurred..`,
        description: err.message,
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: z.infer<typeof articleCreateSchema>) {
    execute(data);
  }

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoaderButton isLoading={isPending} className="w-full">
          Create an article
        </LoaderButton>

        <div onClick={() => toast({ title: "test popa" })}>test popup</div>
      </form>
    </Form>
  );
}
