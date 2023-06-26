import BlacklisterText from "@/components/stats/BlacklisterText"
import RaidersText from "@/components/stats/RaidersText"
import RaidsText from "@/components/stats/RaidsText"
import ServersText from "@/components/stats/ServersText"
import StatCard from "@/components/stats/StatCard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Statistics",
  description: "Interesting stats and numbers",
}

export default async function StatsPage() {
  return (
    <div>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Statistics
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Interesting stats and numbers
          </p>
        </div>
      </section>
      <section className="container flex flex-col flex-wrap gap-4 md:flex-row">
        <StatCard title="Total Users" footer="...and counting!">
          <RaidersText />
        </StatCard>
        <StatCard
          title="Blacklisted Users"
          footer="Special thanks to the folks at Blacklister for providing API access"
        >
          <BlacklisterText />
        </StatCard>
      </section>
      <section className="container mt-4 flex flex-col flex-wrap gap-4 md:flex-row">
        <StatCard title="Total Raids">
          <RaidsText />
        </StatCard>
        <StatCard title="Total Servers">
          <ServersText />
        </StatCard>
      </section>
    </div>
  )
}
