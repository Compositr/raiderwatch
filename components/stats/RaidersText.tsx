import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"

export const cachedCount = (extend?: Prisma.UserWhereInput) =>
  prisma.user.count({
    where: {
      ...extend,
    },

    cacheStrategy: {
      ttl: 300,
      swr: 60 * 60 * 1000,
    },
  })

export default async function RaidersText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
