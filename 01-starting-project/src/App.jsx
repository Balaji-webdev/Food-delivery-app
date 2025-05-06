import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/Context.jsx";
import { UserProgressContextProvider } from "./store/UserProgress.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
