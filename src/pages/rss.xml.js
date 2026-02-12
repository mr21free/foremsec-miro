import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { getSite } from "../utils/consts";

export async function GET(context) {
  const site = await getSite();

  const blogPosts = (await getCollection("blog"))
    .filter((p) => p.data.draft !== true);

  const projects = (await getCollection("projects"))
    .filter((p) => p.data.draft !== true);

  const items = [
    ...blogPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    ...projects.map((project) => ({
      title: project.data.title,
      description: project.data.description,
      pubDate: project.data.pubDate,
      link: `/projects/${project.id}/`,
    })),
  ].sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  return rss({
    title: `${site.author.name} — RSS`,
    description: "Blog posts and projects",
    site: context.site,
    items,
  });
}
