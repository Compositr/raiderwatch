import { pomeloCount } from "./PomeloCountText"
import { cachedCount } from "./RaidersText"

export default async function PomeloPercentText() {
  const percent = (
    ((await pomeloCount()) / (await cachedCount())) *
    100
  ).toFixed(2)

  return <span>{percent}%</span>
}
