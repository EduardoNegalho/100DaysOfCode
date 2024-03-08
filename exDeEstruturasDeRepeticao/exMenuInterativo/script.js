// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let menu = ""

do {
    menu = prompt(`Qual opção deseja?
    (1) - Pequenos Negócios
    (2) - Web Desing
    (3) - Dicas de eCommerce
    (4) - Fotografia
    (5) - Encerrar Sessão
    `)

    switch (menu) {
        case '1':
            alert("Tela dos pequenos negócios")
            break;

        case '2':
            alert("Tela do web desing")
            break;

        case '3':
            alert("Tela de decas de eCommerce")
            break;
        
        case '4':
            alert("Tela de fotografia")
            break;

        case '5':
            alert("O sistema está sendol encerrado...")
            break;

        default:
            alert("Digite apenas as opções válidas")
            break;
    }

} while (menu !== '5');