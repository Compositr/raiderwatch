export default function StatSection({ children }: React.PropsWithChildren) {
  return (
    <section className="container flex flex-col flex-wrap gap-4 mt-4 md:flex-row">
      {children}
    </section>
  )
}
