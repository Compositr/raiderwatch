import { cache } from "react"
import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"

export const cachedCount = cache(async (extend?: Prisma.UserWhereInput) =>
  prisma.user.count({
    where: {
      ...extend,
    },
  })
)

export default async function RaidersText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
