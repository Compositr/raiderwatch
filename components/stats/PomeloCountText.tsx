import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"

export const pomeloCount = (extend?: Prisma.UserWhereInput) =>
  prisma.user.count({
    where: {
      discriminator: 0,
      ...extend,
    },

    cacheStrategy: {
      ttl: 300,
      swr: 60 * 60 * 1000,
    },
  })

export default async function PomeloCountText() {
  const count = await pomeloCount()

  return <span>{count.toLocaleString()}</span>
}
