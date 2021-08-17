import { useState } from "react"
import { Cart } from "./Components/Cart/Cart"
import { Header } from "./Components/Layout/Header"
import { MealsList } from "./Components/Meals/Lists"
import { CartContextProvider } from "./Context/Cart"

const App = () => {
  const [modalCart, setModalCart] = useState(false)

  return (
    <CartContextProvider>
      {modalCart && <Cart setModalCart={setModalCart} />}
      <Header setModalCart={setModalCart} />
      <main>
        <MealsList />
      </main>
    </CartContextProvider>
  )
}

export default App
