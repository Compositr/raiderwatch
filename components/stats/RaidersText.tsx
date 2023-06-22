import prisma from "@/lib/prisma"

export default async function RaidersText() {
  const count = await prisma.user.count()

  return <span>{count.toLocaleString()}</span>
}
