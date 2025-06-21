import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((total, produto) => {
    return total + Number(produto.price);
  }, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Carrinho de Compras</h1>

      {cartItems.length === 0 ? (
        <div>
          <p>Seu carrinho está vazio.</p>
          <Link to="/" style={{
            display: 'inline-block',
            marginTop: '1rem',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>
            Voltar para os produtos
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((produto) => (
            <div
              key={produto.uniqueId}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <img
                  src={produto.photo}
                  alt={produto.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div>
                  <h3>{produto.name}</h3>
                  <p>R$ {produto.price}</p>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    Origem: {produto.source === 'br' ? 'Brasil' : 'Europa'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(produto.uniqueId)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remover
              </button>
            </div>
          ))}

          <h3 style={{ textAlign: 'right', marginTop: '2rem' }}>
            Total: <span style={{ color: '#28a745' }}>R$ {subtotal.toFixed(2)}</span>
          </h3>

          <div style={{ textAlign: 'right', marginTop: '1rem' }}>
            <Link to="/checkout">
              <button style={{
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                padding: '0.7rem 1.5rem',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                Finalizar Pedido
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
