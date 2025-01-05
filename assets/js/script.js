const secaoForm = document.getElementById("secao-form");
const secaoLista = document.getElementById("secao-lista");
const formProdutos = document.getElementById("form-produtos");
const listaProdutos = document.getElementById("lista-produtos");
const botaoNovoProduto = document.getElementById("botao-novo-produto");

let produtos = [];

function showSection(section) {
  if (section === "form") {
    secaoForm.classList.remove("hidden");
    secaoLista.classList.add("hidden");
  } else {
    secaoForm.classList.add("hidden");
    secaoLista.classList.remove("hidden");
  }
}

function addProduct(event) {
  event.preventDefault();

  const nome = document.getElementById("nome-produto").value;
  const descricao = document.getElementById("descricao-produto").value;
  const valor = parseFloat(document.getElementById("valor-produto").value);
  const availability = document.querySelector('input[name="availability"]:checked').value;

  produtos.push({ nome, descricao, valor, availability });

  produtos.sort((a, b) => a.valor - b.valor);

  updateProductList();

  showSection("lista");

  formProdutos.reset();
}

const botaoLimparLista = document.getElementById("botao-limpar-lista");

function clearProductList() {
  produtos = [];
  listaProdutos.innerHTML = "";
}

botaoLimparLista.addEventListener("click", clearProductList);

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

formProdutos.addEventListener("submit", addProduct);
botaoNovoProduto.addEventListener("click", () => showSection("form"));

showSection("secao-lista");
