import { truncated30d } from "@/lib/utils"
import { cachedCount } from "./RaidersText"

export default async function RecentRaidersText() {
  const count = await cachedCount({
    seen: {
      gte: truncated30d(),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
