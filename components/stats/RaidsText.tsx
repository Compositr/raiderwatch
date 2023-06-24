import { cache } from "react"

import prisma from "@/lib/prisma"

const cachedCount = cache(async () => prisma.raid.count())

export default async function RaidsText() {
  const count = await cachedCount()

  return <span>{count.toLocaleString()}</span>
}
