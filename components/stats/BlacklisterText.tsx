export default async function BlacklisterText() {
  const stats = await fetch("https://api.blacklister.xyz/stats", {
    headers: {
      Authorization: process.env.BLACKLISTER!,
    },
  }).then((res) => res.json())
  return <span>{stats.users.toLocaleString()}</span>
}
