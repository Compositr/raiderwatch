"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"

import { Button } from "../ui/button"

export default function RaiderLookup() {
  const router = useRouter()

  const [id, setId] = useState("")
  const [valid, setIsValid] = useState(true)

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        if (!/^[0-9]{7,}$/.test(id)) return setIsValid(false)

        router.push(`/lookup/${id}`)
      }}
    >
      <label htmlFor="id-input" className="text-sm font-bold">
        Discord User ID{" "}
        {valid ? null : (
          <span className="italic text-destructive">-- Invalid Format</span>
        )}
      </label>
      <Input
        id="id-input"
        className={`mt-1 ${valid ? null : "border-destructive"}`}
        pattern="^[0-9]{7,}$"
        type="text"
        placeholder="578837371144110081"
        onChange={(e) => {
          setId(e.target.value)
          setIsValid(true)
        }}
        value={id}
        required
      />

      <div className="mt-2">
        <Button type="submit" variant={"default"} className="w-full md:w-fit">
          Check
        </Button>
      </div>
    </form>
  )
}
