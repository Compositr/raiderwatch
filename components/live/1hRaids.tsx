import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"
import { truncated1h } from "@/lib/utils"

export const raidsCount = (extend?: Prisma.RaidWhereInput) =>
  prisma.raid.count({
    where: {
      ...extend,
    },

    cacheStrategy: {
      ttl: 10,
      swr: 60,
    },
  })

export default async function OneHourRaids() {
  const count = await raidsCount({
    timestamp: {
      gte: truncated1h(),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
