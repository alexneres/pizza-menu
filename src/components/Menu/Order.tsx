import { HTMLAttributes } from 'react'

type OrderProps = HTMLAttributes<HTMLDivElement> & {
  closeHour: number
}

export default function Order({ closeHour, ...props }: OrderProps) {
  return (
    <header className="header" {...props}>
      <div className="order">
        <p>
          We&apos;re open util {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </header>
  )
}
