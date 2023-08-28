import { cachedCount } from "./RaidsText"

export default async function RecentRaidsText() {
  const count = await cachedCount({
    timestamp: {
      gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
