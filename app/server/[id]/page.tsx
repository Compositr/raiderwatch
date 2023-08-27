import { convertSnowflakeToDate } from "@/lib/discord"
import prisma from "@/lib/prisma"
import { snowflake } from "@/lib/zod/user"
import { notFound } from "next/navigation"

export default async function ServerLookupPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  snowflake.parse(id)

  const guild = await prisma.guild.findUnique({
    where: { id },
    include: {
      raids: true,
    },
  })

  const created = convertSnowflakeToDate(id)

  if(!guild) notFound()
}
