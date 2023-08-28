import { cachedCount } from "./RaidersText"

export default async function RecentRaidersText() {
  const count = await cachedCount({
    seen: {
      gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
