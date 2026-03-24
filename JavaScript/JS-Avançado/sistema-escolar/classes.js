class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    exibirPerfil() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
        return `
            <div class="text-center">
                <h2 class="display-6 fw-bold mb-3">${this.nome}</h2>
                <p class="lead mb-2 text-light opacity-75"><strong>Email:</strong> ${this.email}</p>
            </div>
        `;
    }
}

class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
    }

    exibirPerfil() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Turma: ${this.turma}`);
        return `
            <div class="text-center">
                <span class="badge bg-info text-dark mb-3 px-3 py-2 text-uppercase fw-bold">Aluno</span>
                <h2 class="display-6 fw-bold mb-3">${this.nome}</h2>
                <div class="border-top border-light opacity-25 my-3"></div>
                <p class="lead mb-2"><strong>Email:</strong> ${this.email}</p>
                <p class="lead mb-0"><strong>Turma:</strong> ${this.turma}</p>
            </div>
        `;
    }
}

class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
    }

    exibirPerfil() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Matérias: ${this.materias.join(', ')}`);
        return `
            <div class="text-center">
                <span class="badge bg-warning text-dark mb-3 px-3 py-2 text-uppercase fw-bold">Professor</span>
                <h2 class="display-6 fw-bold mb-3">${this.nome}</h2>
                <div class="border-top border-light opacity-25 my-3"></div>
                <p class="lead mb-2"><strong>Email:</strong> ${this.email}</p>
                <p class="lead mb-0"><strong>Matérias:</strong> ${this.materias.join(', ')}</p>
            </div>
        `;
    }
}
