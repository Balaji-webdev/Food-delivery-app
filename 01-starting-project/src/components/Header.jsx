import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "../store/Context.jsx";
import UserProgressContext from "../store/UserProgress.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
 const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart(){
    userProgressCtx.showCart()

  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="LOGO OF THE IMAGE" />
        <h1>THE RANCH</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart({totalCartItems} )</Button>
      </nav>
    </header>
  );
}
