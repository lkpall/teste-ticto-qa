#language: pt

Funcionalidade: CRUD de usuário na tela principal

    Testando a tela do Ticto QA

    Contexto:
        Dado Acesso o site de teste da Ticto

    Cenario: Cadastrar usuario com dados inválidos
        Quando preencho o formulario com os seguintes dados
            | nome    | email           | senha |
            | Gabriel | teste@teste.com | 1234  |
        Entao valido que a mensagem de erro aparece "Insira um Nome e Sobrenome válido."
        E valido que a mensagem de erro aparece "O campo Password deve ter no minimo 8 caracteres."

    Cenario: Cadastrar usuario com dados válidos
        Quando preencho o formulario com os seguintes dados
            | nome           | email           | senha     |
            | Bruno Henrique | teste@teste.com | senha123  |
        Entao valido que a mensagem de sucesso aparece "Usuário cadastrado com sucesso."
        E valido que o usuario foi criado
            | nome           | email           |
            | Bruno Henrique | teste@teste.com |

    Cenario: Editar usuario com dados inválidos
        Quando edito os dados do usuario "Bruno Henrique"
            | nome   | email       |
            | Brunno | teste@teste |
        Entao valido que a mensagem de erro de edicao aparece "Insira um Nome e Sobrenome válido."

    Cenario: Editar usuario com dados válidos
        Quando edito os dados do usuario "Bruno Henrique"
            | nome                | email               |
            | Giorgian Arrascaeta | teste2@teste.com.br |
        Entao valido que a mensagem de sucesso aparece "Usuário salvo com sucesso."
        E valido que o usuario foi criado
            | nome                | email               |
            | Giorgian Arrascaeta | teste2@teste.com.br |

    Cenario: Excluir um usuario
        Quando clico em apagar o usuario "Giorgian Arrascaeta"
        Entao valido que a mensagem de sucesso aparece "Usuário removido com sucesso."
        E valido que o usuario "Giorgian Arrascaeta" foi excluido
