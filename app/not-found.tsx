import BackButtion from "@/components/notFound/BackButton"

export default function NotFoundPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Page Not Found
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hmm... We can&apos;t seem to find that page. Check the spelling of the
          URL.
        </p>
      </div>
      <div className="flex gap-4">
        <BackButtion />
      </div>
    </section>
  )
}
