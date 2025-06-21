// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🛒 Seu Carrinho</h1>

      {cart.items.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <div>
          <ul>
            {cart.items.map(item => (
              <li key={item.id} style={{ marginBottom: "1rem" }}>
                <strong>{item.name}</strong> - R$ {item.price} x {item.quantity}
                <button
                  style={{ marginLeft: "1rem", background: "red", color: "white" }}
                  onClick={() => removeFromCart(item)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>

          <button onClick={clearCart} style={{ marginTop: "1rem" }}>
            Limpar Carrinho
          </button>
        </div>
      )}
    </div>
  );
}
