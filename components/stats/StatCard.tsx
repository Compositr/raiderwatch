import { Suspense } from "react"

import { Skeleton } from "../ui/skeleton"

export default function StatCard(props: StatCardProps) {
  return (
    <div className="flex-1 rounded-md border p-4">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <div className="mt-2">
        <Suspense fallback={<Skeleton className="h-6 w-24" />}>
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {props.children}
          </span>
        </Suspense>
      </div>
      <div className="mt-4">
        <span className="text-sm text-muted-foreground">
          {props.footer}
        </span>
      </div>
    </div>
  )
}

export interface StatCardProps extends React.PropsWithChildren {
  title: string,
  footer?: string
}
