import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
} from "lucide-react";
import type { TableOfContents } from "fumadocs-core/toc";
import { HelpSearchButton } from "@/components/help-search";
import { TrackedAnchor } from "@/components/tracked-anchor";

export type HelpArticle = {
  title: string;
  description?: string;
  url: string;
  slugs: string[];
};

export type HelpCollection = {
  slug: string;
  title: string;
  label: string;
  description: string;
  intent: string;
  url: string;
  icon: LucideIcon;
  articles: HelpArticle[];
};

const collectionConfigs = [
  {
    slug: "start",
    title: "Getting Started",
    label: "Getting Started",
    description: "Learn the basic terms and create your first study.",
    intent: "New users",
    icon: BookOpen,
  },
  {
    slug: "create",
    title: "Creating Studies",
    label: "Creating Studies",
    description: "Use Smart Builder, templates, follow-ups, and testing.",
    intent: "Study creation",
    icon: ClipboardList,
  },
  {
    slug: "analyze",
    title: "Reviewing Results",
    label: "Reviewing Results",
    description: "Review responses, transcripts, Insights, and Research.",
    intent: "Results review",
    icon: FileText,
  },
] as const;

export function getHelpCollections(pages: HelpArticle[]): HelpCollection[] {
  return collectionConfigs.map((config) => ({
    ...config,
    url: `/${config.slug}`,
    articles: pages.filter((page) => page.slugs[0] === config.slug),
  }));
}

export function getCollectionForUrl(
  collections: HelpCollection[],
  url: string,
) {
  const slug = url.split("/").filter(Boolean)[0];
  return collections.find((collection) => collection.slug === slug);
}

export function getPopularArticles(pages: HelpArticle[]) {
  const preferredUrls = [
    "/start/quickstart",
    "/create/smart-builder",
    "/create/follow-up-depth",
    "/analyze",
  ];

  return preferredUrls
    .map((url) => pages.find((page) => page.url === url))
    .filter((page): page is HelpArticle => Boolean(page));
}

export function HelpHeader({
  collections,
  activeSlug,
}: {
  collections: HelpCollection[];
  activeSlug?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#ece9e2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 font-semibold text-[#0a0a0a]"
          aria-label="Lemma Help Center"
        >
          <img
            src="/favicon.png"
            alt=""
            className="h-6 w-6 shrink-0 rounded-sm"
            aria-hidden="true"
          />
          <span className="hidden sm:inline">Help Center</span>
        </Link>

        <nav
          aria-label="Help collections"
          className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto lg:flex"
        >
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={collection.url}
              className={[
                "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition",
                activeSlug === collection.slug
                  ? "bg-[#f1f2ff] text-[#2436d9]"
                  : "text-[#5f5f58] hover:bg-[#f7f7f4] hover:text-[#0a0a0a]",
              ].join(" ")}
            >
              {collection.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
          <HelpSearchButton compact />
          <TrackedAnchor
            href="https://app.heylemma.com"
            event="docs_open_app_click"
            eventProps={{
              cta_id: "docs_header_open_app",
              cta_text: "Open app",
              location: "header",
            }}
            className="rounded-lg bg-[#0a0a0a] px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
          >
            Open app
          </TrackedAnchor>
        </div>
      </div>
      <div className="border-t border-[#f0eee8] px-5 py-2 lg:hidden">
        <div className="flex gap-2 overflow-x-auto">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={collection.url}
              className={[
                "shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium",
                activeSlug === collection.slug
                  ? "bg-[#f1f2ff] text-[#2436d9]"
                  : "bg-[#fbfbf8] text-[#5f5f58]",
              ].join(" ")}
            >
              {collection.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function HelpFooter() {
  return (
    <footer className="border-t border-[#ece9e2] bg-[#fbfbf8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#686861] md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="font-semibold text-[#0a0a0a]">Lemma Help Center</div>
          <p className="mt-1 max-w-xl">
            Practical guidance for creating studies and reviewing results.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <TrackedAnchor
            className="hover:text-[#0a0a0a]"
            href="https://heylemma.com"
            event="docs_footer_product_click"
            eventProps={{
              cta_id: "docs_footer_product",
              cta_text: "Product",
              location: "footer",
            }}
          >
            Product
          </TrackedAnchor>
          <TrackedAnchor
            className="hover:text-[#0a0a0a]"
            href="https://app.heylemma.com"
            event="docs_footer_app_click"
            eventProps={{
              cta_id: "docs_footer_app",
              cta_text: "App",
              location: "footer",
            }}
          >
            App
          </TrackedAnchor>
        </div>
      </div>
    </footer>
  );
}

export function HelpHome({
  collections,
  popularArticles,
}: {
  collections: HelpCollection[];
  popularArticles: HelpArticle[];
}) {
  return (
    <main>
      <section className="border-b border-[#ece9e2] bg-[#fbfbf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#3d50ff]">
              Lemma Help Center
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-normal text-[#0a0a0a] md:text-5xl">
              Help with creating studies and reviewing results
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#525252]">
              Learn how to create an adaptive study in text or voice, guide the
              follow-up questions, and review responses, transcripts, Insights,
              and Research.
            </p>
            <div className="mt-8">
              <HelpSearchButton />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#e6e3dd] bg-white shadow-sm">
            <img
              src="/screenshots/docs-hq/home-dashboard.png"
              alt="The Lemma Studies dashboard."
              className="block w-full"
            />
            <div className="border-t border-[#ece9e2] px-4 py-3 text-sm text-[#686861]">
              The Studies dashboard is where your studies live after you create
              them.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#0a0a0a]">
              Browse by collection
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-[#686861]">
              Start with the basics, then open the guide that matches what you
              are doing in Lemma.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#ece9e2] bg-[#fbfbf8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#0a0a0a]">
              Recommended starting points
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {popularArticles.map((article) => (
                <ArticleListLink key={article.url} article={article} />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#dfe4ff] bg-[#f7f8ff] p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2436d9]">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
              Fastest path to value
            </div>
            <p className="mt-3 text-sm leading-6 text-[#283044]">
              Describe what you want to learn in the smart builder, or start
              from a template in the New Study screen. Lemma can draft the study
              context, starter questions, and follow-up guidance so you can
              refine instead of starting from a blank page.
            </p>
            <Link
              href="/start/quickstart"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2436d9] hover:text-[#0a0a0a]"
            >
              Create your first study
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function HelpArticleShell({
  page,
  collection,
  toc,
  children,
}: {
  page: HelpArticle;
  collection?: HelpCollection;
  toc: TableOfContents;
  children: ReactNode;
}) {
  const collectionArticles =
    collection?.articles.filter((article) => article.url !== collection.url) ??
    [];
  const collectionNavItems = collection
    ? [
        {
          title: "Overview",
          description: collection.description,
          url: collection.url,
          slugs: [collection.slug],
        },
        ...collectionArticles,
      ]
    : [];
  const isCollectionIndex = collection?.url === page.url;
  const CollectionIcon = collection?.icon;

  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-6xl justify-center gap-8 px-5 py-8 lg:grid-cols-[minmax(0,760px)_280px] lg:px-8 lg:py-12">
        <div className="min-w-0">
          <nav
            className="mb-5 flex items-center gap-2 text-sm text-[#686861]"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#0a0a0a]">
              Help Center
            </Link>
            {collection ? (
              <>
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
                {isCollectionIndex ? (
                  <span
                    aria-current="page"
                    className="font-medium text-[#0a0a0a]"
                  >
                    {collection.title}
                  </span>
                ) : (
                  <>
                    <Link
                      href={collection.url}
                      className="hover:text-[#0a0a0a]"
                    >
                      {collection.title}
                    </Link>
                    <ChevronRight aria-hidden="true" className="h-4 w-4" />
                    <span
                      aria-current="page"
                      className="line-clamp-1 font-medium text-[#0a0a0a]"
                    >
                      {page.title}
                    </span>
                  </>
                )}
              </>
            ) : null}
          </nav>

          <div className="border-b border-[#ece9e2] pb-8">
            {collection && CollectionIcon ? (
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-[#e6e3dd] bg-[#fbfbf8] px-3 py-1.5 text-sm font-medium text-[#525252]">
                <CollectionIcon aria-hidden="true" className="h-4 w-4" />
                {collection.intent}
              </div>
            ) : null}
            <h1 className="text-4xl font-semibold leading-[1.12] tracking-normal text-[#0a0a0a]">
              {page.title}
            </h1>
            {page.description ? (
              <p className="mt-4 text-lg leading-8 text-[#525252]">
                {page.description}
              </p>
            ) : null}
          </div>

          <article className="lemma-article py-8">{children}</article>

          <ArticleFeedback collection={collection} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <HelpSearchButton compact className="w-full" />
            {collection && collectionNavItems.length > 0 ? (
              <div className="rounded-lg border border-[#e6e3dd] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">
                  In this collection
                </div>
                <nav className="mt-3 space-y-1" aria-label={collection.title}>
                  {collectionNavItems.map((article) => {
                    const isActive = article.url === page.url;

                    return (
                      <Link
                        key={article.url}
                        href={article.url}
                        aria-current={isActive ? "page" : undefined}
                        className={[
                          "block rounded-md px-3 py-2 text-sm leading-5 transition",
                          isActive
                            ? "bg-[#f1f2ff] font-semibold text-[#2436d9]"
                            : "text-[#686861] hover:bg-[#fbfbf8] hover:text-[#0a0a0a]",
                        ].join(" ")}
                      >
                        {article.title}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ) : null}
            {toc.length > 0 ? (
              <div className="rounded-lg border border-[#e6e3dd] bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">
                  On this page
                </div>
                <nav className="mt-3 space-y-2" aria-label="Table of contents">
                  {toc
                    .filter((item) => item.depth <= 3)
                    .map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        className={[
                          "block text-sm leading-5 text-[#686861] hover:text-[#2436d9]",
                          item.depth === 3 ? "pl-3" : "",
                        ].join(" ")}
                      >
                        {item.title}
                      </a>
                    ))}
                </nav>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}

function CollectionCard({ collection }: { collection: HelpCollection }) {
  const Icon = collection.icon;

  return (
    <Link
      href={collection.url}
      className="group flex min-h-40 flex-col rounded-lg border border-[#e6e3dd] bg-white p-5 text-left shadow-sm transition hover:border-[#3d50ff] hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f1f2ff] text-[#2436d9]">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 text-[#8a8a8a] transition group-hover:text-[#3d50ff]"
        />
      </div>
      <div className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">
        {collection.intent}
      </div>
      <h3 className="mt-2 text-lg font-semibold leading-6 text-[#0a0a0a]">
        {collection.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-5 text-[#686861]">
        {collection.description}
      </p>
      <div className="mt-4 text-sm font-semibold text-[#2436d9]">
        Open collection
      </div>
    </Link>
  );
}

function ArticleListLink({ article }: { article: HelpArticle }) {
  return (
    <Link
      href={article.url}
      className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 rounded-lg border border-[#e6e3dd] bg-white p-4 transition hover:border-[#3d50ff]"
    >
      <span>
        <span className="block text-[15px] font-semibold leading-5 text-[#0a0a0a]">
          {article.title}
        </span>
        {article.description ? (
          <span className="mt-1.5 block text-sm leading-5 text-[#686861]">
            {article.description}
          </span>
        ) : null}
      </span>
      <ArrowRight
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-[#8a8a8a] transition group-hover:text-[#3d50ff]"
      />
    </Link>
  );
}

function ArticleFeedback({ collection }: { collection?: HelpCollection }) {
  return (
    <section className="mt-10 rounded-lg border border-[#e6e3dd] bg-[#fbfbf8] p-5">
      <div className="text-base font-semibold text-[#0a0a0a]">
        Did this answer your question?
      </div>
      <p className="mt-2 text-sm leading-6 text-[#686861]">
        If you still need context, search the Help Center or open the related
        collection.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <HelpSearchButton compact />
        {collection ? (
          <Link
            href={collection.url}
            className="inline-flex h-10 items-center rounded-lg border border-[#d9d7d1] bg-white px-3 text-sm font-semibold text-[#0a0a0a] transition hover:border-[#3d50ff]"
          >
            Browse {collection.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
