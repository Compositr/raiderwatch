import { Suspense } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import RaidersText from "@/components/stats/RaidersText"

export const revalidate = 10;

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Discord Raider Watch
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          <Suspense fallback={<span>Millions of</span>}>
            <RaidersText />
          </Suspense>{" "}
          raiders scraped and counting!
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/" rel="noreferrer" aria-disabled>
          <Button disabled>Lookup (soon&trade;)</Button>
        </Link>
      </div>
    </section>
  )
}
