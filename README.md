# Pacotes de Viagem - Exemplo de Factory com Princípio de Substituição de Liskov e Mapa de Ações em JavaScript

Este é um exemplo simples de como utilizar o padrão Factory em JavaScript, junto com o Princípio de Substituição de Liskov e um mapa de ações, para criar diferentes tipos de pacotes de viagem em uma agência de viagem.

## Funcionamento

O código consiste em três classes principais:

1. `PacoteViagem`: Classe base que representa um pacote genérico de viagem.
2. `PacoteInternacional`: Subclasse que estende `PacoteViagem`, representando um pacote de viagem internacional.
3. `PacoteNacional`: Subclasse que estende `PacoteViagem`, representando um pacote de viagem nacional.

Além disso, o código utiliza o padrão Factory para criar diferentes tipos de pacotes de viagem de forma dinâmica. A criação dos pacotes respeita o Princípio de Substituição de Liskov, garantindo que objetos de subclasses possam ser substituídos por objetos de sua classe base sem alterar o comportamento esperado do programa.

O Factory é implementado na classe `PacoteViagemFactory`, que utiliza um mapa de ações para associar cada tipo de viagem a uma função de criação correspondente. Isso proporciona uma maneira flexível e extensível de criar instâncias de diferentes tipos de pacotes de viagem, permitindo a adição fácil de novos tipos no futuro.

## Uso

Para utilizar o código, siga estes passos:

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Execute o arquivo `index.js` com o Node.js para ver os exemplos de criação de pacotes de viagem.

Exemplo de execução:

```
node index.js
```

Você verá a saída no console mostrando os detalhes dos pacotes de viagem criados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema para discutir possíveis melhorias ou enviar um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
