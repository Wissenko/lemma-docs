import Link from "next/link";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Step, Steps } from "fumadocs-ui/components/steps";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function CardsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-2">{children}</div>
  );
}

function DocCard({
  title,
  href,
  children,
  label,
}: {
  title: string;
  href: string;
  children: ReactNode;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-[#e6e3dd] bg-white p-4 text-left transition-colors hover:border-[#3d50ff]"
    >
      {label ? (
        <div className="mb-3 text-xs font-medium text-[#3d50ff]">{label}</div>
      ) : null}
      <div className="flex items-center justify-between gap-4">
        <h3 className="m-0 text-base font-semibold text-[#0a0a0a]">{title}</h3>
        <span
          aria-hidden="true"
          className="text-sm text-[#8a8a8a] transition-colors group-hover:text-[#3d50ff]"
        >
          →
        </span>
      </div>
      <div className="mt-2 text-sm leading-6 text-[#525252] [&>p]:m-0">
        {children}
      </div>
    </Link>
  );
}

function Outcome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="not-prose my-6 rounded-lg border border-[#e6e3dd] bg-[#f7f7f4] p-5">
      <div className="text-sm font-semibold text-[#0a0a0a]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-[#525252] [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

function HelpCallout({
  type = "note",
  title,
  children,
}: {
  type?: "insight" | "tip" | "note";
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    insight: {
      label: "Insight",
      border: "border-[#dfe4ff]",
      bg: "bg-[#f7f8ff]",
      title: "text-[#2436d9]",
      body: "text-[#283044]",
    },
    tip: {
      label: "Tip",
      border: "border-[#d8ead7]",
      bg: "bg-[#f5fbf4]",
      title: "text-[#245f2d]",
      body: "text-[#334c35]",
    },
    note: {
      label: "Note",
      border: "border-[#e6e3dd]",
      bg: "bg-[#fbfbf8]",
      title: "text-[#0a0a0a]",
      body: "text-[#525252]",
    },
  }[type];

  return (
    <div
      className={`not-prose my-6 rounded-lg border ${styles.border} ${styles.bg} p-5`}
    >
      <div className={`text-sm font-semibold ${styles.title}`}>
        {title ?? styles.label}
      </div>
      <div className={`mt-2 text-sm leading-6 ${styles.body} [&>p]:m-0`}>
        {children}
      </div>
    </div>
  );
}

function ScreenshotSlot({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="not-prose my-7 rounded-lg border border-dashed border-[#b8b8b1] bg-[#fbfbf8] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.12em] text-[#6f6f68]">
            Screenshot needed
          </div>
          <div className="mt-1 text-base font-semibold text-[#0a0a0a]">
            {title}
          </div>
        </div>
        {id ? (
          <code className="rounded-md border border-[#e6e3dd] bg-white px-2 py-1 text-xs text-[#525252]">
            {id}
          </code>
        ) : null}
      </div>
      <div className="mt-3 text-sm leading-6 text-[#525252] [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

function ExampleBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="not-prose my-6 rounded-lg border border-[#dfe4ff] bg-[#f7f8ff] p-5">
      <div className="text-sm font-semibold text-[#2436d9]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-[#283044] [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

function TwoColumn({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-2">{children}</div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-[#e6e3dd] bg-white p-4">
      <div className="text-sm font-semibold text-[#0a0a0a]">{title}</div>
      <div className="mt-2 text-sm leading-6 text-[#525252] [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

function ProductScreenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-lg border border-[#e6e3dd] bg-white">
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
      {caption ? (
        <figcaption className="border-t border-[#e6e3dd] bg-[#fbfbf8] px-4 py-3 text-sm leading-6 text-[#525252]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Step,
    Steps,
    CardsGrid,
    DocCard,
    Outcome,
    HelpCallout,
    ScreenshotSlot,
    ExampleBlock,
    TwoColumn,
    Panel,
    ProductScreenshot,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;
