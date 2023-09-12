import { truncated30d } from "@/lib/utils"
import { pomeloCount } from "./PomeloCountText"
import { cachedCount } from "./RaidersText"

export default async function PomeloRecentPercentText() {
  const count = (
    ((await pomeloCount({
      seen: {
        gte: truncated30d(),
      },
    })) /
      (await cachedCount({
        seen: {
          gte: truncated30d(),
        },
      }))) *
    100
  ).toFixed(2)

  return <span>{count}%</span>
}
