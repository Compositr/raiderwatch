export default function StatSection({ children }: React.PropsWithChildren) {
  return (
    <section className="container mt-4 flex flex-col flex-wrap gap-4 md:flex-row">
      {children}
    </section>
  )
}
