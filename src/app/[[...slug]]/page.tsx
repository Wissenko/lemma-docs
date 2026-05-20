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
import { redirect } from "next/navigation";

const retiredPublicSections = new Set([
  "account",
  "contacts",
  "share",
]);

function isRetiredPath(slugs?: string[]) {
  if (!slugs || slugs.length === 0) return false;
  if (retiredPublicSections.has(slugs[0])) return true;
  return slugs[0] === "start" && slugs[1] === "navigate-lemma";
}

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
  if (!page && isRetiredPath(params.slug)) redirect("/");
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
  if (!page && isRetiredPath(params.slug)) {
    return {
      title: {
        absolute: "Lemma Help Center",
      },
      description: "Find practical answers for creating studies and reviewing results in Lemma.",
    };
  }
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
