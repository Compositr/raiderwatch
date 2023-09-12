import { truncated30d } from "@/lib/utils"
import { cachedCount } from "./RaidsText"

export default async function RecentRaidsText() {
  const count = await cachedCount({
    timestamp: {
      gte: truncated30d(),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
