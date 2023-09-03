import { Metadata } from "next"

import Link from "@/components/ui/link"
import RaiderLookup from "@/components/lookup/RaiderLookup"
import ServerLookup from "@/components/lookup/ServerLookup"

export const metadata: Metadata = {
  title: "Lookup",
}

export default async function LookupPage() {
  return (
    <section className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold tracking-tighter leading-tight md:text-4xl">
          Raider Check
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Lookup a Discord user by ID to see if they are in the database. Also
          checks the <Link href="https://blacklister.xyz">Blacklister</Link>{" "}
          database. Alternatively, lookup all raids against a certain server.
        </p>
      </div>
      <div className="w-full md:w-fit">
        <div className="mt-4">
          <RaiderLookup />
        </div>
        <div className="mt-8">
          <ServerLookup />
        </div>
      </div>
    </section>
  )
}
