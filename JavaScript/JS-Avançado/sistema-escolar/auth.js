const usuarios = [
    new Aluno("Gabriel Rosa", "gabrielteste@gmail.com", "senha123", "3º Ano A"),
    new Aluno("Maria Oliveira", "mariateste@gmail.com", "aluno456", "2º Ano B"),
    new Professor("Carlos Souza", "carlosteste@gmail.com", "prof789", ["Matemática", "Física"]),
    new Professor("Ana Costa", "anateste@gmail.com", "ensino101", ["Português", "Literatura"])
];

function realizarLogin(email, senha) {
    const erroElement = document.getElementById('login-error');
    if (erroElement) erroElement.textContent = '';

    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuarioEncontrado) {
        const simplifiedUser = {
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            role: usuarioEncontrado instanceof Aluno ? 'Aluno' : 'Professor'
        };

        if (usuarioEncontrado instanceof Aluno) {
            simplifiedUser.turma = usuarioEncontrado.turma;
        } else {
            simplifiedUser.materias = usuarioEncontrado.materias;
        }

        localStorage.setItem('usuarioLogado', JSON.stringify(simplifiedUser));
        window.location.href = 'perfil.html';
    } else {
        if (erroElement) {
            erroElement.textContent = 'E-mail ou senha incorretos.';
            erroElement.style.display = 'block';
        }
    }
}

// Executar o formulário de login se estiver na index.html
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            realizarLogin(email, senha);
        });
    }
});
