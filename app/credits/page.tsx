import CreditsCard from "@/components/credits/CreditsCard"

export default function CreditsPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Credits
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Thanks to all the following awesome people for making this website
            possible!
          </p>
        </div>
      </section>
      <section className="container flex flex-col flex-wrap gap-4 md:flex-row">
        <CreditsCard
          name="Blacklister"
          linkHref="https://blacklister.xyz"
          linkText="blacklister.xyz"
          avatar="/credits/blacklister.webp"
          avatarFallback="BL"
          message="For providing access to the Blacklister API"
        />
      </section>
    </>
  )
}
