import { HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLDivElement>

export default function Header({ ...props }: HeaderProps) {
  return (
    <header className="header" {...props}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
