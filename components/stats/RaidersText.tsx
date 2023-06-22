import { cache } from "react"

import prisma from "@/lib/prisma"

const cachedCount = cache(async () => prisma.user.count())

export default async function RaidersText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
