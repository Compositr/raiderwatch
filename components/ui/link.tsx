import NextLink from "next/link"

export default function Link(props: LinkProps) {
  return (
    <NextLink href={props.href} target={props.newTab ? "_blank" : "_self"}>
      <span className="underline">{props.children}</span>
    </NextLink>
  )
}

export interface LinkProps extends React.PropsWithChildren {
  href: string
  newTab?: boolean
}
