"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "../ui/link"

export default function CreditsCard(props: CreditsCardsProps) {
  return (
    <div className="rounded-md border p-4">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src={props.avatar} />
          <AvatarFallback>{props.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold">{props.name}</h3>
          <p className="text-sm">{props.message}</p>
          <div className="flex items-center pt-2">
            <Link href={props.linkHref} newTab>
              <span className="text-xs text-muted-foreground">
                {props.linkText ?? props.linkHref}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export interface CreditsCardsProps {
  name: string
  message: string
  linkText?: string
  linkHref: string
  avatar: string
  avatarFallback: string
}
