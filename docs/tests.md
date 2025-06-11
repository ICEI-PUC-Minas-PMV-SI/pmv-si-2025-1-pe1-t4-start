# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastro.html <br> 2) Preencha todos os campos do formulário corretamente <br> 3) Clique no botão "Cadastrar".
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a página inicial ( feed )
**Dados de entrada** | Preencher os dados corretos necessário para realizar o cadastro
**Resultado obtido** | -

**Caso de Teste** | **CT02 - Criar conta (Para profissionais)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastro-profissional.html <br> 2) Preencha todos os campos do formulário corretamente <br> 2) Clique no botão "Prosseguir" <br> 
**Requisitos associados** | RF-002
**Resultado esperado** | Direcionar para a segunda etapa do cadastro profissional
**Dados de entrada** | Preencher os dados corretos necessários para ir para etapa dois do cadastro profissional
**Resultado obtido** | -

**Caso de Teste** | **CT03 - Criar conta (Para profissionais)**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastroprof.html <br> 2) Preencha todos os campos do formulário corretamente <br> 2) Clique no botão "Cadastar" <br> 
**Requisitos associados** | RF-003
**Resultado esperado** | Permitir ao profissional ingressar na página inicial do feed
**Dados de entrada** | Preencher os dados corretos necessários para ser direcionado a tela inical do sistema
**Resultado obtido** | -


**Caso de Teste** | **CT04 - Logar no sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/index.html <br> 2) Preencha todos os campos do formulário corretamente <br> 3) Clique no botão "Entrar".
**Requisitos associados** | RF-004
**Resultado esperado** | Prosseguir para a página inicial (Página do fórum)
**Dados de entrada** | Preencher os dados corretos necessário para ingressar na conta.
**Resultado obtido** | -

**Caso de Teste** | **CT05 - Editar perfil**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html tendo já logado na conta <br> 2)Clique no ícone superior direito de uma pessoa; 3) Vá até a página de posts feitos e no canto esquerdo na sessão de dados do perfil, clique no botão de editar perfil; <br> 
**Requisitos associados** | RF-005;
**Resultado esperado** | Conseguir ingressar na página e prosseguir para edição do perfil;
**Dados de entrada** | Clicar no botão de editar perfil;
**Resultado obtido** | -

**Caso de Teste** | **CT06 - Publicações realizadas pelo usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html tendo já logado na conta <br> 2) Clique no ícone do canto superior direito de uma pessoa;
**Requisitos associados** | RF-006;
**Resultado esperado** | Conseguir ingressar na página prosseguindo para posts já feitos no perfil;
**Dados de entrada** | Ter clicado no ícone de pessoa no canto superior direito da página (Navbar);
**Resultado obtido** | -

**Caso de Teste** | **CT06 - Publicações realizadas pelo usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html tendo já logado na conta <br> 2) Clique no ícone do canto superior direito de uma pessoa;  3) Vá até a página de publicações feitas 4) Clique nos ícones de lápis e de lixeira e clique em 'comentar'
**Requisitos associados** | RF-006;
**Resultado esperado** | Conseguir editar, exluir e comentar posts, respectivamente;
**Dados de entrada** | Ter clicado no ícone de pessoa e após, dentro da página esperada, nos ícones de lápis, lixeira e clicar em 'comentar' (Navbar);
**Resultado obtido** | -

**Caso de Teste** | **CT07 - Tela inicial do sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/index.html; <br> 2) Preencha os dados corretos do formulário e clique no botão entrar; <br> 3) Clique no ícone com um lápis (canto inferior direito) e no ícone de coração em cada post desejado;
**Requisitos associados** | RF-007;
**Resultado esperado** | Conseguir ingressar na página, fazer posts e curtir os posts desejados, respectivamente 
**Dados de entrada** | Ter inserido os dados de login corretos, escrever algo ou subir uma foto para que seja postada a publicação e clicar no ícone de like da publicação que deseja curtir, respectivamente;
**Resultado obtido** | -

**Caso de Teste** | **CT08 - Sessão de serviços**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html após logado no sistema; <br> 2) Clique no botão de serviços da Navbar;
**Requisitos associados** | RF-008;
**Resultado esperado** | Ser direcionado para a página de serviços prestados no sistema (Psicólogos, Advogados e Babás);
**Dados de entrada** | Ter clicado no botão de serviços da Navbar;
**Resultado obtido** | -


**Caso de Teste** | **CT09 - Sessão de mapa**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html após logado no sistema; <br> 2) Clique no botão de mapa da Navbar;
**Requisitos associados** | RF-009;
**Resultado esperado** | Ser direcionado para a página de serviços com mapa de localizações (Psicólogos, Advogados e Babás);
**Dados de entrada** | Ter clicado no botão de mapa da Navbar;
**Resultado obtido** | -



## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



