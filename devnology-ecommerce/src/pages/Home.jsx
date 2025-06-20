import { useEffect, useState } from 'react';
import ProductFilters from '../components/ProductFilters';  // caminho correto

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPais, setFiltroPais] = useState('todos');

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const respostaBr = await fetch("http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider");
        const respostaEu = await fetch("http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider");

        const produtosBr = (await respostaBr.json()).map(p => ({ ...p, source: 'br' }));
        const produtosEu = (await respostaEu.json()).map(p => ({ ...p, source: 'eu' }));

        const todosProdutos = [...produtosBr, ...produtosEu];
        setProdutos(todosProdutos);
        setCarregando(false);
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
        setCarregando(false);
      }
    };

    buscarProdutos();
  }, []);

  const produtosFiltrados = produtos.filter(produto => {
    const nomeCombina = produto.name?.toLowerCase().includes(filtroNome.toLowerCase()) ?? false;
    const paisCombina = filtroPais === 'todos' || produto.source === filtroPais;
    return nomeCombina && paisCombina;
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Produtos disponíveis</h1>

      {/* Usa o componente separado para filtros */}
      <ProductFilters
        filtroNome={filtroNome}
        setFiltroNome={setFiltroNome}
        filtroPais={filtroPais}
        setFiltroPais={setFiltroPais}
      />

      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {produtosFiltrados.map(produto => (
            <div key={produto.id} style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px"
            }}>
              <img
                src={produto.photo}
                alt={produto.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{produto.name}</h3>
              <p>R$ {produto.price}</p>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>
                Origem: {produto.source === 'br' ? 'Brasil' : 'Europa'}
              </p>
              <button>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
