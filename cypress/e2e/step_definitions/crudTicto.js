import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import registroUsuario from "../../pages/crudTictoPage"


Given("Acesso o site de teste da Ticto", () => {
    cy.visit("/")
})

When("preencho o formulario com os seguintes dados", (table) => {
    table.hashes().forEach((row) => {
        registroUsuario.cadastrar(
            row.nome,
            row.email,
            row.senha
        )
    });
})

When("edito os dados do usuario {string}", (userName, table) => {
    registroUsuario.clicarEditarDados(userName)
    table.hashes().forEach((row) => {
        registroUsuario.editarDados(row.nome, row.email)
    });
})

When("clico em apagar o usuario {string}", (userName) => {
    registroUsuario.apagarUsuario(userName)
})

Then("valido que a mensagem de erro aparece {string}", (msg) => {
    registroUsuario.validarMensagemErro(msg)
})

Then("valido que a mensagem de sucesso aparece {string}", (msg) => {
    registroUsuario.validarMensagemSucesso(msg)
})

Then("valido que a mensagem de erro de edicao aparece {string}", (msg) => {
    registroUsuario.validarMensagemErroEdit(msg)
})

Then("valido que o usuario foi criado", (table) => {
    table.hashes().forEach((row) => {
        registroUsuario.validarDadosUsuario(
            row.nome,
            row.email
        )
    });
})

Then("valido que o usuario {string} foi excluido", (userName) => {
    registroUsuario.validarExclusao(userName)
})
