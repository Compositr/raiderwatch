import { cache } from "react"

import prisma from "@/lib/prisma"

const cachedCount = async () =>
  prisma.guild.count({
    cacheStrategy: {
      ttl: 300,
      swr: 60 * 60 * 1000,
    },
  })

export default async function ServersText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
