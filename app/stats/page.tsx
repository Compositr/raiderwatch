import { Metadata } from "next"

import BlacklisterText from "@/components/stats/BlacklisterText"
import PomeloPercentText from "@/components/stats/PomeloPercentText"
import RaidersText from "@/components/stats/RaidersText"
import RaidsText from "@/components/stats/RaidsText"
import ServersText from "@/components/stats/ServersText"
import StatCard from "@/components/stats/StatCard"
import StatSection from "@/components/stats/StatSection"
import PomeloCountText from "@/components/stats/PomeloCountText"
import PomeloRecentPercentText from "@/components/stats/PomeloRecentPercentText"

export const metadata: Metadata = {
  title: "Statistics",
  description: "Interesting stats and numbers",
}

export default async function StatsPage() {
  return (
    <div>
      <section className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold tracking-tighter leading-tight md:text-4xl">
            Statistics
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Interesting stats and numbers
          </p>
        </div>
      </section>
      <StatSection>
        <StatCard title="Total Users" footer="...and counting!">
          <RaidersText />
        </StatCard>
        <StatCard
          title="Blacklisted Users"
          footer="Special thanks to the folks at Blacklister for providing API access"
        >
          <BlacklisterText />
        </StatCard>
      </StatSection>
      <StatSection>
        <StatCard title="Total Raids">
          <RaidsText />
        </StatCard>
        <StatCard title="Total Servers">
          <ServersText />
        </StatCard>
      </StatSection>
      <section className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h2 className="text-2xl font-extrabold tracking-tighter leading-tight md:text-3xl">
            Pomelo Stats
          </h2>
          <p className="max-w-[700px] text-md text-muted-foreground">
            Tracking Discord's Pomelo uptake by raiders and userbots
          </p>
        </div>
      </section>
      <StatSection>
        <StatCard
          title="Pomelo Percentage"
          footer="Percentage of users with a new Pomelo username (usernames with no # numbers)"
        >
          <PomeloPercentText />
        </StatCard>
        <StatCard title="Pomelo Users">
          <PomeloCountText />
        </StatCard>
        <StatCard title="Recent Pomelo Percentage" footer="Percentage of Pomelo users in the past 30d">
          <PomeloRecentPercentText />
        </StatCard>
      </StatSection>
    </div>
  )
}
