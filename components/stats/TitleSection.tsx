export default function TitleSection(props: TitleSectionProps) {
  return (
    <section className="container grid gap-6 items-center pt-6 pb-6 md:py-8">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-2xl font-extrabold tracking-tighter leading-tight md:text-3xl">
          {props.title}
        </h2>
        <p className="max-w-[700px] text-md text-muted-foreground">
          {props.subtitle}
        </p>
      </div>
    </section>
  )
}

export interface TitleSectionProps {
  title: string
  subtitle: string
}
