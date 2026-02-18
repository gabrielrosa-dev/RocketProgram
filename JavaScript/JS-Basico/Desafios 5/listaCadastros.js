const  prompt = require('prompt-sync')();

class ListaCadastros {
    constructor() {
        this.cadastros = [];
    }

    adicionarCadastro(nome, idade, email) {
        const pessoa = { nome, idade, email };    
        const cadastroExistente = this.cadastros.find(cadastro => cadastro.email === email);

        if (cadastroExistente) {
            console.log("Erro: Já existe um cadastro com este email.");
            return;
        }

        this.cadastros.push(pessoa);
        console.log("Cadastro adicionado com sucesso!");
    }

    removerCadastro(email) {
        if (!this.cadastros.some(cadastro => cadastro.email === email)) {
            console.log("Erro: Cadastro não encontrado.");
            return;
        }
        this.cadastros = this.cadastros.filter(cadastro => cadastro.email !== email);
        console.log("Cadastro removido com sucesso!");
    }

    ListaCadastros() {
        console.log("\nLista de Cadastros:");
        this.cadastros.forEach((cadastro, index) => {
            console.log(`${index + 1}. Nome: ${cadastro.nome}, Idade: ${cadastro.idade}, Email: ${cadastro.email}`);
        });
        return this.cadastros;
    }

    sair() {
        console.log("Saindo do programa...");
        process.exit(0);
    }
}

const listaCadastros = new ListaCadastros();

while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Adicionar cadastro");
    console.log("2. Remover cadastro");
    console.log("3. Listar cadastros");
    console.log("4. Sair");

    const opcao = prompt("Digite a opção desejada: ");

    switch (opcao) {
        case "1":
            const nome = prompt("Digite o nome: ");
            const idade = parseInt(prompt("Digite a idade: "));
            const email = prompt("Digite o email: ");
            listaCadastros.adicionarCadastro(nome, idade, email);
            break;
        case "2":
            const emailRemover = prompt("Digite o email do cadastro a ser removido: ");
            listaCadastros.removerCadastro(emailRemover);
            break;
        case "3":
            listaCadastros.ListaCadastros();
            break;
        case "4":
            listaCadastros.sair();
            break;
        default:
            console.log("Opção inválida!");
    }
}