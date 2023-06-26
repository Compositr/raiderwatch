export default async function BlacklisterText() {
  const stats = await fetch("https://api.blacklister.xyz/stats", {
    headers: {
      Authorization: process.env.BLACKLISTER!,
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
  return <span>{stats.users.toLocaleString()}</span>
}
