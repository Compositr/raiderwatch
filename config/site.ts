export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Raider Watch",
  description:
    "Scraped database of raiders from Beemo's logs",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Lookup",
      href: "/lookup",
    },
    {
      title: "Stats",
      href: "/stats"
    }
  ],
}
