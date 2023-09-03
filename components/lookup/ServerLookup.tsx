"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"

import { Button } from "../ui/button"

export default function ServerLookup() {
  const router = useRouter()

  const [id, setId] = useState("")
  const [valid, setIsValid] = useState(true)

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        if (!/^[0-9]{7,}$/.test(id)) return setIsValid(false)

        router.push(`/lookup/guild/${id}`)
      }}
    >
      <label htmlFor="id-input" className="text-sm font-bold">
        Discord Server ID{" "}
        {valid ? null : (
          <span className="italic text-destructive">-- Invalid Format</span>
        )}
      </label>
      <Input
        id="id-input"
        className={`mt-1 ${valid ? null : "border-destructive"}`}
        pattern="^[0-9]{7,}$"
        type="text"
        placeholder="697474023914733575"
        onChange={(e) => {
          setId(e.target.value)
          setIsValid(true)
        }}
        value={id}
        required
      />

      <div className="mt-2">
        <Button type="submit" variant={"outline"} className="w-full md:w-fit">
          Check
        </Button>
      </div>
    </form>
  )
}
