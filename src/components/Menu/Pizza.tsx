type PizzaType = {
  name: string
  ingredients: string
  img: string
  price: number
  soldOut: boolean
}

export function Pizza({ name, ingredients, img, price, soldOut }: PizzaType) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  )
}
