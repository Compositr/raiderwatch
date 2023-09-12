import prisma from "@/lib/prisma"
import { truncateDateToDay } from "@/lib/utils"

import LineChart from "./chartjs/Line"

export default async function Raiders30dLine() {
  const data = await prisma.user.findMany({
    where: {
      seen: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  })

  const groupedRaids = data.reduce((acc: Record<string, number>, user) => {
    const truncatedDate = truncateDateToDay(user.seen)
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
      day: new Date(key),
      count: groupedRaids[key],
    }))
    .sort((a, b) => a.day.getTime() - b.day.getTime())
    .map(({ count, day }) => {
      x.push(day.toLocaleDateString()), y.push(count)
    })

  return (
    <div className="h-full w-full rounded-md border bg-muted p-4">
      <LineChart
        data={{
          datasets: [
            {
              data: y,
              label: "Raiders",
            },
          ],
          labels: x,
        }}
        title="Unique Raiders per Day"

      />
    </div>
  )
}
