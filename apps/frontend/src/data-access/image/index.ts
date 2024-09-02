import { strapiPost } from "@/lib/api/strapi";

export async function uploadImage(image: File) {
  const response = await strapiPost("api::article.article", {
    data: {
      files: image,
    },
  });

  return response;
}
