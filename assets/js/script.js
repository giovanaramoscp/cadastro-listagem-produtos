// Seleção de elementos
const secaoForm = document.getElementById("secao-form");
const secaoLista = document.getElementById("secao-lista");
const formProdutos = document.getElementById("form-produtos");
const listaProdutos = document.getElementById("lista-produtos");
const botaoNovoProduto = document.getElementById("botao-novo-produto");

// Array para armazenar os produtos
let produtos = [];

// Função para alternar entre as seções
function showSection(section) {
  if (section === "form") {
    secaoForm.classList.remove("hidden");
    secaoLista.classList.add("hidden");
  } else {
    secaoForm.classList.add("hidden");
    secaoLista.classList.remove("hidden");
  }
}

// Função para adicionar um produto
function addProduct(event) {
  event.preventDefault();

  // Capturando os valores do formulário
  const nome = document.getElementById("nome-produto").value;
  const descricao = document.getElementById("descricao-produto").value;
  const valor = parseFloat(document.getElementById("valor-produto").value);
  const availability = document.querySelector('input[name="availability"]:checked').value;

  // Criando o produto e adicionando ao array
  produtos.push({ nome, descricao, valor, availability });

  // Ordenando os produtos pelo valor (menor para o maior)
  produtos.sort((a, b) => a.valor - b.valor);

  // Atualizando a lista de produtos
  updateProductList();

  // Mostrando a lista
  showSection("lista");

  // Limpando o formulário
  formProdutos.reset();
}

// Seleção de elementos adicionais
const botaoLimparLista = document.getElementById("botao-limpar-lista");

// Função para limpar a listagem
function clearProductList() {
  // Limpar o array de produtos
  produtos = [];
  // Limpar o conteúdo da tabela
  listaProdutos.innerHTML = "";
}

// Evento para o botão "Limpar Listagem"
botaoLimparLista.addEventListener("click", clearProductList);

// Função para atualizar a listagem
function updateProductList() {
  listaProdutos.innerHTML = "";

  produtos.forEach((produtos) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${produtos.nome}</td>
      <td>R$ ${produtos.valor.toFixed(2)}</td>
    `;
    listaProdutos.appendChild(row);
  });
}

// Eventos
formProdutos.addEventListener("submit", addProduct);
botaoNovoProduto.addEventListener("click", () => showSection("form"));

// Inicializar mostrando a listagem
showSection("secao-lista");
