import { pomeloCount } from "./PomeloCountText"
import { cachedCount } from "./RaidersText"

export default async function PomeloRecentPercentText() {
  const count = (
    ((await pomeloCount({
      seen: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    })) /
      (await cachedCount({
        seen: {
          gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        },
      }))) *
    100
  ).toFixed(2)

  return <span>{count}%</span>
}
