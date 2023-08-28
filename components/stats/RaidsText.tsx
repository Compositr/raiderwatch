import { cache } from "react"
import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"

export const cachedCount = cache(async (extend?: Prisma.RaidWhereInput) =>
  prisma.raid.count({
    where: {
      ...extend,
    },
  })
)

export default async function RaidsText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
