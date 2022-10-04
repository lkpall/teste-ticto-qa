class registroUsuario{

    elementos = {
        // formulario
        nomeInput: () => cy.get('#name'),
        emailInput: () => cy.get('#email'),
        senhaInput: () => cy.get('#password'),
        cadastrarButton: () => cy.get('form button'),

        // mensagens
        erroMensagemSmall: () => cy.get('form div small'),
        sucessoMensagemAlert: () => cy.get('.alert.alert-success'),

        linhaUsuarioTr: () => cy.get('td.text-truncate'),

        // modal de edicao
        nomeEditInput: () => cy.get('.modal-content input[name="e_name"]:visible'),
        emailEditInput: () => cy.get('.modal-content input[name="e_email"]:visible'),
        acoesButtonSubmit: () => cy.get('.modal-content button[type="submit"]:visible'),
        erroMensagemEditSmall: () => cy.get('.modal-content small:visible')
    }

    cadastrar(nome, email, senha){
        // preenchendo formulario
        this.elementos.nomeInput().type(nome)
        this.elementos.emailInput().type(email)
        this.elementos.senhaInput().type(senha)

        this.elementos.cadastrarButton().click()
    }

    validarMensagemErro(mensagem){
        this.elementos.erroMensagemSmall().contains(mensagem)
    }

    validarMensagemSucesso(mensagem){
        this.elementos.sucessoMensagemAlert()
            .invoke('text')
            .should('contain', mensagem)
    }

    pegarLinhaUsuario(nome){
        return this.elementos.linhaUsuarioTr().contains(nome).parent()
    }

    validarDadosUsuario(nome, email){
        this.pegarLinhaUsuario(nome).contains(nome)
        this.pegarLinhaUsuario(nome).contains(email)
    }

    clicarEditarDados(nome){
        this.pegarLinhaUsuario(nome).contains('Ações').click()
        this.pegarLinhaUsuario(nome).find('a[data-target^="#modalEdit"]').click()
    }

    editarDados(novoNome, novoEmail){
        this.elementos.nomeEditInput().clear().type(novoNome)
        this.elementos.emailEditInput().clear().type(novoEmail)
        cy.once('uncaught:exception', () => false)
        this.elementos.acoesButtonSubmit().click()
    }

    validarMensagemErroEdit(mensagem){
        this.elementos.erroMensagemEditSmall().invoke('text')
            .should('contain', mensagem)
    }

    apagarUsuario(nome){
        this.pegarLinhaUsuario(nome).contains('Ações').click()
        this.pegarLinhaUsuario(nome).find('a[data-target^="#modalDelete"]').click()
        this.elementos.acoesButtonSubmit().click()
    }

    validarExclusao(nome){
        this.elementos.linhaUsuarioTr().contains(nome).should('not.exist')
    }
}

module.exports = new registroUsuario()
