import { cache } from "react"
import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"

export const pomeloCount = cache((extend?: Prisma.UserWhereInput) =>
  prisma.user.count({
    where: {
      discriminator: 0,
      ...extend,
    },
  })
)

export default async function PomeloCountText() {
  const count = await pomeloCount()

  return <span>{count.toLocaleString()}</span>
}
