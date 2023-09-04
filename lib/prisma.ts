import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof getPrisma> | undefined
}

const prisma = globalForPrisma.prisma ?? getPrisma()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma

function getPrisma() {
  return new PrismaClient().$extends(withAccelerate())
}
