/**
 * Módulo e Controller do AngularJS para a Aplicação
 */
angular.module('escolaApp', [])
    .controller('AppController', ['$scope', function($scope) {
        // Mensagem simples de boas-vindas
        $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

        // Perfil Principal do Usuário
        $scope.usuario = {
            nome: "Maria",
            tipo: "Professor(a)"
        };

        // Array de usuários para a lista
        $scope.usuarios = [
            { nome: "Ana Silva", tipo: "Aluno", dataCadastro: new Date() },
            { nome: "Carlos Oliveira", tipo: "Professor(a)", dataCadastro: new Date() },
            { nome: "Beatriz Santos", tipo: "Aluno", dataCadastro: new Date() },
            { nome: "Ricardo Pereira", tipo: "Professor(a)", dataCadastro: new Date() },
            { nome: "Mariana Costa", tipo: "Aluno", dataCadastro: new Date() }
        ];
    }])
    .controller('ListaController', ['$scope', function($scope) {
        // Este controller herdará 'usuarios' do seu pai (AppController).
        $scope.subtitulo = "Lista de Usuários Cadastrados";
    }]);
