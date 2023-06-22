import prisma from "@/lib/prisma"
import { convertSnowflakeToDate } from "@/lib/utils"
import { snowflake } from "@/lib/zod/user"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function LookupResultPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  snowflake.parse(id)

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      raids:true
    },
  })

  const created = convertSnowflakeToDate(id)

  const discord = await fetch(`https://discord.com/api/v9/users/${id}`, {
    headers: {
      Authorization: `Bot ${process.env.BOT_TOKEN}`,
    },
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json())

  const blacklister = await fetch(`https://api.blacklister.xyz/${id}`, {
    headers: {
      Authorization: `${process.env.BLACKLISTER}`,
    },
    next: {
      revalidate: 10,
    },
  })
    .then((res) => res.json())
    .catch(() => null)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Lookup for {id}
        </h1>
      </div>
      <div className="w-fit">
        <div className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                {discord.global_name ?? discord.username}
              </CardTitle>
              <CardDescription>
                {discord.discriminator === "0"
                  ? discord.username
                  : `${discord.username}#${discord.discriminator}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex flex-row gap-2">
                {blacklister?.blacklisted ? (
                  <Badge variant={"destructive"}>Blacklisted</Badge>
                ) : null}
                {user ? <Badge variant={"destructive"}>Raider</Badge> : null}
              </div>
              <div className="grid gap-1">
                <div>
                  <span className="block font-bold">Account Created</span>
                  <time dateTime={created.toISOString()}>
                    {created.toLocaleString()} (Local Time)
                  </time>
                </div>
                <div>
                  <span className="block font-bold">Raids Participated</span>
                  <p>{user?.raids.length ?? 0}</p>
                </div>
                {blacklister?.blacklisted ? (
                  <>
                    <div>
                      <span className="block font-bold">
                        Blacklisted Reason
                      </span>
                      <p>{blacklister.reason}</p>
                    </div>
                    <div>
                      <span className="block font-bold">
                        Blacklisted Time (Approximate)
                      </span>
                      <time dateTime={blacklister.date}>
                        {blacklister.date} (UTC)
                      </time>
                    </div>
                  </>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Raids Participated
        </h1>
      </div>
      {user?.raids.length ? (
        <div className="flex flex-col flex-wrap gap-4 md:flex-row">
          {user?.raids.map((raid) => (
            <Card key={raid.id}>
              <CardHeader>
                <CardTitle>Raid on {raid.guildId}</CardTitle>
                <CardDescription>
                  Raid ID <span className="font-mono">{raid.id}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-1">
                  <div>
                    <span className="block font-bold">
                      Raid Timestamp (Approximate)
                    </span>
                    <time dateTime={raid.timestamp.toISOString()}>
                      {new Date(
                        raid.timestamp.getTime() + 1000 * 60 * 60 * (24 + 13)
                      ).toLocaleString()}{" "}
                      (Local Time)
                    </time>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <p>No raids participated.</p>
        </div>
      )}
    </section>
  )
}
