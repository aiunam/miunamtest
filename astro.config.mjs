import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

//https://www.youtube.com/watch?v=XoIHKO6AkoM 원본영상에서 vercel adapter 부분보고 모두해결
// astro nelify는 해결 못 했는데 이주소로 가면 될듯 https://docs.astro.build/en/guides/deploy/netlify/
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});