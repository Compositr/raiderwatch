"use client"

import { useRouter } from "next/navigation"

import { Button } from "../ui/button"

export default function BackButtion() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.back()
      }}
      variant={"outline"}
    >
      Back
    </Button>
  )
}
