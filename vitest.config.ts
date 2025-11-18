import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
