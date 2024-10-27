# Puzzle Game Solver

Este projeto implementa um jogo de quebra-cabeça 3x3, onde o objetivo é organizar os números de 0 a 8 na matriz até que estejam na ordem correta. O jogo inclui funcionalidades de randomização, reset e soluções automáticas usando algoritmos de busca em profundidade e A*.

## Descrição do Projeto

O jogo usa uma matriz `3x3` para representar as células do quebra-cabeça. O espaço vazio é representado pelo número `8`, e ele pode ser movido para reorganizar os números na matriz. Este projeto utiliza HTML e JavaScript para a interface gráfica e para controlar a lógica do jogo.

### Funcionalidades

- **Atualização da matriz (`attMatriz`)**: Atualiza o valor das células HTML com o conteúdo da matriz `mebefree`.
- **Reset (`reset`)**: Redefine a matriz para o estado inicial.
- **Randomização (`randomize`)**: Preenche a matriz com valores únicos de 0 a 8 em posições aleatórias.
- **Randomização Real (`trueRandomize`)**: Realiza uma série de 30 movimentos aleatórios para embaralhar a matriz mantendo-a solúvel.
- **Verificação de Posições (`verifyPos`)**: Calcula a soma das distâncias de Manhattan para cada célula, verificando a proximidade da matriz ao estado objetivo.
- **Busca Profunda (`buscaProfunda`)**: Implementa uma busca em profundidade até uma profundidade de 50 para tentar resolver o quebra-cabeça.
- **Algoritmo A* (`astar`)**: Utiliza o algoritmo A* com a função de heurística de Manhattan para resolver o quebra-cabeça de forma mais eficiente.

### Como Jogar

1. Clone o repositório e abra o arquivo `index.html` em um navegador.
2. Use os botões disponíveis:
   - **Aleatorizar**: embaralha a matriz.
   - **Resetar Matriz**: redefine o estado inicial do quebra-cabeça.
   - **Resolver BP**: usa a busca em profundidade para encontrar uma solução.
   - **Resolver A***: resolve o quebra-cabeça utilizando o algoritmo A*.

### Pré-requisitos

- Navegador com suporte a jQuery.

### Estrutura de Arquivo
```plaintext
├── index.html       # Interface do usuário com botões de controle e exibição de matriz
├── script.js        # Código principal que define a lógica do jogo e os algoritmos
└── README.md        # Documentação do projeto
```
### Algoritmos

- **Busca Profunda**: Executa uma busca não informada até 50 movimentos para tentar encontrar uma solução.
- **Algoritmo A\***: Usa a soma das distâncias de Manhattan como heurística para encontrar o caminho mais curto para o estado objetivo.

### Melhorias Futuras

- Implementar uma verificação mais rápida para garantir a solubilidade da matriz inicial.
- Adicionar animações para movimentos de células.
- Otimizar a função `astar` para evitar duplicação de estados já explorados.

### Contribuição

Contribuições são bem-vindas! Faça um fork do projeto, implemente suas melhorias e abra um pull request para revisarmos.

### Licença

Este projeto é distribuído sob a licença MIT.
