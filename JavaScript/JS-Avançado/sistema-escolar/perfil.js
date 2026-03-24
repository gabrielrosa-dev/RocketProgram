function carregarPerfil() {
    const usuarioJSON = localStorage.getItem('usuarioLogado');
    const profileContent = document.getElementById('profile-content');

    if (!usuarioJSON) {
        window.location.href = 'index.html';
        return;
    }

    const userData = JSON.parse(usuarioJSON);
    let usuario;

    // Reinstanciar a classe correta para usar o método exibirPerfil()
    if (userData.role === 'Aluno') {
        usuario = new Aluno(userData.nome, userData.email, '', userData.turma);
    } else {
        usuario = new Professor(userData.nome, userData.email, '', userData.materias);
    }

    // Exibir no console como solicitado
    usuario.exibirPerfil();

    // Mostrar na tela
    profileContent.innerHTML = usuario.exibirPerfil();
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', carregarPerfil);
