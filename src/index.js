import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CartProvider from "./context/CartProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
