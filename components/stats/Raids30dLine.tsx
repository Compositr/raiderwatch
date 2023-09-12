import prisma from "@/lib/prisma"

import LineChart from "./chartjs/Line"
import { truncateDateToDay } from "@/lib/utils"

export default async function Raids30dLine() {
  const data = await prisma.raid.findMany({
    where: {
      timestamp: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  })

  const groupedRaids = data.reduce((acc: Record<string, number>, raid) => {
    const truncatedDate = truncateDateToDay(raid.timestamp)
    const dateString = truncatedDate.toISOString()

    if (!acc[dateString]) {
      acc[dateString] = 1
    } else {
      acc[dateString]++
    }

    return acc
  }, {})

  const x: string[] = []
  const y: number[] = []

  Object.keys(groupedRaids)
    .map((key) => ({
      raid_day: new Date(key),
      raid_count: groupedRaids[key],
    }))
    .sort((a, b) => a.raid_day.getTime() - b.raid_day.getTime())
    .map(({ raid_count, raid_day }) => {
      x.push(raid_day.toLocaleDateString()), y.push(raid_count)
    })

  return (
    <div className="h-full w-full rounded-md border bg-muted p-4">
      <LineChart
        data={{
          datasets: [
            {
              data: y,
              label: "Raids"
            },
          ],
          labels: x,
        }}

        title="Raids per Day"
      />
    </div>
  )
}