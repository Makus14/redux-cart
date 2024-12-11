import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { db, ref, set } from "./store/firebase.js";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const cartRef = ref(db, "cart");

    set(cartRef, cart)
      .then(() => {
        console.log("Данные успешно отправлены в Firebase!");
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных в Firebase:", error);
      });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
