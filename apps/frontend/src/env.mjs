import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * ServerSide Environment variables, not available on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    STRAPI_API_PUBLIC_TOKEN: z.string().optional(),
    STRAPI_URL: z.string().optional(),
  },
  /*
   * Environment variables available on the client (and server).
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().optional(),
  },
  runtimeEnv: process.env,
});
