import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function LookupResultPageLoading() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Lookup Loading...
        </h1>
      </div>
      <div className="w-fit">
        <div className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                <Skeleton className="h-6 w-48" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-16" />
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex flex-row gap-2">
                <Skeleton className="h-4 w-12 rounded-lg" />
              </div>
              <div className="grid gap-1">
                <div>
                  <span className="block font-bold">Account Created</span>
                  <Skeleton className="h-4 w-16" />
                </div>
                <div>
                  <span className="block font-bold">Raids Participated</span>
                  <Skeleton className="h-4 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Raids Participated
        </h1>
      </div>
      <div className="flex flex-col flex-wrap gap-4 md:flex-row">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              <Skeleton className="h-6 w-48" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-16" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-1">
              <div>
                <span className="block font-bold">
                  Raid Timestamp (Approximate)
                </span>
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
