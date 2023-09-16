import OneHourRaiders from "@/components/live/1hRaiders"
import OneHourRaids from "@/components/live/1hRaids"
import StatCard from "@/components/stats/StatCard"
import StatSection from "@/components/stats/StatSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Live Data",
  description: "Up to date statistics about Beemo",
}

export const revalidate = 10

export default async function LivePage() {
  return (
    <div className="mb-8">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Live Data
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Updated every 10 seconds.
          </p>
        </div>
      </section>
      <StatSection>
        <StatCard title="Raids in Past Hour">
          <OneHourRaids/>
        </StatCard>
        <StatCard title="Raiders in Past Hour">
          <OneHourRaiders/>
        </StatCard>
      </StatSection>
    </div>
  )
}
