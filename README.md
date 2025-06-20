# Devnology E-commerce

Projeto de um sistema de e-commerce construído com **React** no frontend e consumo de APIs externas para listagem de produtos. Inclui funcionalidades de filtro por nome e país de origem, exibição dos produtos em cards, e estrutura para carrinho de compras (em desenvolvimento).

---

## Tecnologias usadas

- React (com Vite)
- Fetch API para consumo das APIs externas
- JavaScript (ES6+)
- CSS inline simples para estilização básica

---

## Estrutura do Projeto

- `/src/pages/Home.jsx`: Página principal que lista os produtos com filtros por nome e país
- `/src/components/ProductFilters.jsx`: Componente separado para os filtros (campo texto e dropdown)
- APIs externas utilizadas:
  - Fornecedor Brasileiro: `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider`
  - Fornecedor Europeu: `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider`

---

## Como rodar o projeto

1. Clone o repositório

```bash
git clone https://github.com/MariaSaldanhaDEV/test_site_Devnology.git
Acesse a pasta do projeto

bash
Copiar código
cd test_site_Devnology/devnology-ecommerce
Instale as dependências

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento

bash
Copiar código
npm run dev
Abra no navegador em http://localhost:3000 (ou outra porta que o Vite indicar)

Funcionalidades implementadas
Listagem unificada de produtos das duas APIs (brasileira e europeia)

Filtros:

Busca por nome (campo texto)

Filtragem por país de origem (Brasil, Europa ou todos)

Produtos exibidos em cards com foto, nome, preço e indicação da origem

Componente separado para filtros para facilitar manutenção e reuso

Próximos passos
Implementar carrinho de compras com adição, remoção e persistência

Página de checkout para finalizar pedidos

Backend em Node.js para unificar dados e registrar pedidos

Aplicativo mobile em Flutter (opcional)

Decisões técnicas
Uso do Vite para projeto React para desenvolvimento rápido e moderno

Separação de componentes para melhor organização e manutenção

Uso do Fetch API para simplicidade e facilidade de integração

Tratamento de possíveis dados faltantes usando encadeamento opcional (?.)

Inclusão do campo source para identificar a origem dos produtos e facilitar filtragem