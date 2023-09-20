import { Pizza } from '.'
import { pizzaData } from './data'

export function Menu() {
  const content = pizzaData.map((pizza) => (
    <Pizza
      key={pizza.name}
      name={pizza.name}
      ingredients={pizza.ingredients}
      img={pizza.photoName}
      price={pizza.price}
      soldOut={pizza.soldOut}
    />
  ))

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {content.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">{content}</ul>
        </>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later</p>
      )}
    </main>
  )
}
