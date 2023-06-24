import { cache } from "react"

import prisma from "@/lib/prisma"

const cachedCount = cache(async () => prisma.guild.count())

export default async function ServersText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
