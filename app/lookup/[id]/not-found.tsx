export default function LookupResultNotFoundPage() {
  return (
    <section className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold tracking-tighter leading-tight md:text-4xl">
          User Not Found
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This ID is valid but does not correspond to any user on Discord
        </p>
      </div>
    </section>
  )
}
