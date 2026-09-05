// @ts-check

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// Collect URL paths for entries marked `unlisted: true` so the sitemap can skip them.
// The pages still build and are reachable by direct URL; they're just not discoverable.
function getUnlistedPaths() {
  const paths = new Set();

  for (const type of ["blog", "projects"]) {
    const dir = path.join(rootDir, "src/content", type);
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!/\.(md|mdx)$/.test(file)) continue;
      const contents = fs.readFileSync(path.join(dir, file), "utf-8");
      const frontmatter = contents.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatter && /^unlisted:\s*true\s*$/m.test(frontmatter[1])) {
        const slug = file.replace(/\.(md|mdx)$/, "");
        paths.add(`/${type}/${slug}/`);
      }
    }
  }

  return paths;
}

const unlistedPaths = getUnlistedPaths();

export default defineConfig({
  site: "https://miroremias.com",
  base: "/",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !unlistedPaths.has(new URL(page).pathname),
    }),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
