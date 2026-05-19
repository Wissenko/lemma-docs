import { getMDXComponents } from "@/components/mdx";
import {
  HelpArticleShell,
  HelpFooter,
  HelpHeader,
  HelpHome,
  getCollectionForUrl,
  getHelpCollections,
  getPopularArticles,
  type HelpArticle,
} from "@/components/help-center";
import { source } from "@/lib/source";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function getHelpArticles(): HelpArticle[] {
  return source
    .getPages()
    .filter((page) => page.url !== "/")
    .map((page) => ({
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      slugs: page.slugs,
    }));
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const articles = getHelpArticles();
  const collections = getHelpCollections(articles);
  const collection = getCollectionForUrl(collections, page.url);
  const activeSlug = collection?.slug;

  if (page.url === "/") {
    return (
      <>
        <HelpHeader collections={collections} />
        <HelpHome
          collections={collections}
          popularArticles={getPopularArticles(articles)}
        />
        <HelpFooter />
      </>
    );
  }

  const MDX = page.data.body;
  const article = {
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    slugs: page.slugs,
  };

  return (
    <>
      <HelpHeader collections={collections} activeSlug={activeSlug} />
      <HelpArticleShell
        page={article}
        collection={collection}
        toc={page.data.toc}
      >
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </HelpArticleShell>
      <HelpFooter />
    </>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title:
      page.url === "/"
        ? {
            absolute: "Lemma Help Center",
          }
        : page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
    },
  };
}
