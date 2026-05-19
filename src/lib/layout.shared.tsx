import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold text-[#0a0a0a]">
          <img
            src="/assets/logo-black.png"
            alt=""
            className="h-4 w-auto"
            aria-hidden="true"
          />
          <span>Docs</span>
        </span>
      ),
      url: "/",
    },
    links: [
      {
        text: "Product",
        url: "https://heylemma.com",
        external: true,
      },
      {
        text: "App",
        url: "https://app.heylemma.com",
        external: true,
      },
    ],
    themeSwitch: {
      enabled: false,
    },
  };
}
