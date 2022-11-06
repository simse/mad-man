import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";


export default defineConfig({
  site: 'https://madman.simse.io',
  integrations: [
    tailwind(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
    compress({
      img: false
    })
  ]
});