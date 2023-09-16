import { cache } from "react"

export const revalidate = 10

export const blacklister = cache(() =>
  fetch("https://api.blacklister.xyz/stats", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
)

export default async function BlacklisterText() {
  const stats = await blacklister()

  return <span>{stats.users.toLocaleString()}</span>
}
