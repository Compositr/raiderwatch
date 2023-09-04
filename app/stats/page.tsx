import { Metadata } from "next"

import BlacklisterText from "@/components/stats/BlacklisterText"
import PomeloCountText from "@/components/stats/PomeloCountText"
import PomeloPercentText from "@/components/stats/PomeloPercentText"
import PomeloRecentPercentText from "@/components/stats/PomeloRecentPercentText"
import RaidersText from "@/components/stats/RaidersText"
import RaidsText from "@/components/stats/RaidsText"
import RecentRaidersText from "@/components/stats/RecentRaidersText"
import RecentRaidsText from "@/components/stats/RecentRaidsText"
import ServersText from "@/components/stats/ServersText"
import StatCard from "@/components/stats/StatCard"
import StatSection from "@/components/stats/StatSection"
import TitleSection from "@/components/stats/TitleSection"

export const metadata: Metadata = {
  title: "Statistics",
  description: "Interesting stats and numbers",
}

export default async function StatsPage() {
  return (
    <div className="mb-8">
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
      <TitleSection
        title="Pomelo Stats"
        subtitle="Tracking Discord's Pomelo uptake by raiders and userbots"
      />
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
        <StatCard
          title="Recent Pomelo Percentage"
          footer="Percentage of Pomelo users in the past 30d"
        >
          <PomeloRecentPercentText />
        </StatCard>
      </StatSection>
      <TitleSection title="Recent Stats" subtitle="Stats from the past 30d" />
      <StatSection>
        <StatCard title="Users">
          <RecentRaidersText />
        </StatCard>
        <StatCard title="Raids">
          <RecentRaidsText />
        </StatCard>
      </StatSection>
    </div>
  )
}
