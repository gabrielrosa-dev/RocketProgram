const prompt = require("prompt-sync")();

let listaDeCompras = [];

function adicionarItem() {
    let item = prompt("Digite o nome do item que deseja adicionar à lista de compras: ");
    listaDeCompras.push(item);
    console.log(`O item "${item}" foi adicionado à lista de compras.`);
}


function removerItem() {
    let item = prompt("Digite o nome do item que deseja remover da lista de compras: ");
    let index = listaDeCompras.indexOf(item); // indexOf retorna -1 se o item não for encontrado
    if (index !== -1) {
        listaDeCompras.splice(index, 1); // splice remove o item do array
        console.log(`O item "${item}" foi removido da lista de compras.`);
    } else {
        console.log(`O item "${item}" não foi encontrado na lista de compras.`);
    }
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("Lista de Compras:\n");
        listaDeCompras.forEach((item, index) => { // forEach percorre cada item do array e exibe com numeração
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function sair() {
    console.log("Saindo do programa. Até a próxima!");
    process.exit();
}

while (true) {
    console.log("\n=-=-= Lista de Compras =-=-:");
    console.log("1. Adicionar item");
    console.log("2. Remover item");
    console.log("3. Exibir lista de compras");
    console.log("4. Sair");
    let escolha = prompt("Escolha uma opção (1-4): ");

    switch (escolha) {
        case "1":
            adicionarItem();
            break;
        case "2":
            removerItem();
            break;
        case "3":
            exibirLista();
            break;
        case "4":
            sair();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida (1-4).");
    }
}