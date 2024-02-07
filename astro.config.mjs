import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), robotsTxt(), mdx()]
});