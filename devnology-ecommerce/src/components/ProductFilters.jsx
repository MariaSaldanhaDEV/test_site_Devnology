export default function FiltrosProdutos({ filtroNome, setFiltroNome, filtroPais, setFiltroPais }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={filtroNome}
        onChange={(e) => setFiltroNome(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />

      <select
        value={filtroPais}
        onChange={(e) => setFiltroPais(e.target.value)}
        style={{ padding: '0.5rem' }}
      >
        <option value="todos">Todos os países</option>
        <option value="br">Brasil</option>
        <option value="eu">Europa</option>
      </select>
    </div>
  );
}