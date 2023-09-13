export default function TitleSection(props: TitleSectionProps) {
  return (
    <section className="container grid items-center gap-6 py-6 md:py-8">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          {props.title}
        </h2>
        <p className="text-md max-w-[700px] text-muted-foreground">
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
