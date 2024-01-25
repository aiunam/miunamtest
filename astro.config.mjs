import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


//https://docs.astro.build/en/guides/deploy/github/
// 1.여기 깃헙 업로드위해서 수정 site 라인 있는줄 2.Configure a GitHub Action보고 파일 생성
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  site: 'https://astronaut.github.io',
});
