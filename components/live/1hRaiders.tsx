import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"
import { truncated1h } from "@/lib/utils"

export const raidersCount = (extend?: Prisma.UserWhereInput) =>
  prisma.user.count({
    where: {
      ...extend,
    },

    cacheStrategy: {
      ttl: 10,
      swr: 60,
    },
  })

export default async function OneHourRaiders() {
  const count = await raidersCount({
    seen: {
      gte: truncated1h(),
    },
  })

  return <span>{count.toLocaleString()}</span>
}
