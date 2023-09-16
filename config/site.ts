export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Raider Watch",
  description: "Scraped database of raiders from Beemo's logs",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Stats",
      href: "/stats",
    },
    {
      title: "Live",
      href: "/live",
    },
    {
      title: "Credits",
      href: "/credits",
    },
  ],
}
