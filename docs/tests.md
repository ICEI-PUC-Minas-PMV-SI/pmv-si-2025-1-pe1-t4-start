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

Nesta seção, serão documentados os requisitos funcionais e não funcionais de nosso sistema, com o intuito de ressaltar os principais papéis de cada usabilidade do mesmo.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **LS01 - Logar no sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/index.html <br> 2) Preencha todos os campos do formulário corretamente e com dados de uma conta existente; <br> 3) Clique no botão "Entrar";
**Requisitos associados** | RF-001;
**Resultado esperado** | Prosseguir para a página inicial ( feed );
**Dados de entrada** | Preencher todos os campos com os dados de uma conta existente no sistema;
**Resultado obtido** | Usuário prosseguiu para a página inicial de acordo com os dados postos de conta existente.




**Caso de Teste** | **CC02 - Criar conta ( para mães )**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastro.html <br> 2) Preencha todos os campos do formulário corretamente; <br> 3) Clique no botão "Cadastrar";
**Requisitos associados** | RF-002;
**Resultado esperado** | Prosseguir para a página de edição de perfil para edição e complementação de dados do cadastro;
**Dados de entrada** | Preencher todos os campos com os dados corretos necessários para realizar o cadastro e incluir um e-mail não cadastrado no sistema;
**Resultado obtido** | Usuário prosseguiu para a página de edição de perfil.




**Resultado obtido** | -

**Caso de Teste** | **CC03 - Criar conta profissional, etapa 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastro-profissional.html <br> 2) Preencha todos os campos do formulário corretamente; <br> 2) Clique no botão "Prosseguir"; <br> 
**Requisitos associados** | RF-003;
**Resultado esperado** | Direcionar para a segunda etapa do cadastro profissional;
**Dados de entrada** | Preencher todos os campos com os dados corretos necessários para ir para etapa dois do cadastro profissional e incluir um e-mail não cadastrado no sistema;
**Resultado obtido** | Usuário acessou a etapa 2 do cadastro profissional.





**Caso de Teste** | **CC04 - Criar conta profissional, etapa 2**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/cadastroprof.html <br> 2) Preencha todos os campos do formulário corretamente; <br> 2) Clique no botão "Cadastar"; <br> 
**Requisitos associados** | RF-004
**Resultado esperado** | Permitir ao profissional ingressar na página inicial do feed;
**Dados de entrada** | Preencher todos os campos com os dados corretos necessários para cada profissional, para ser direcionado a tela inical do sistema;
**Resultado obtido** | Usuário ingressa para a página inicial do sistema.





**Caso de Teste** | **EP05 - Editar perfil**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/userprofile.html <br> 2) No canto da tela, clicar no botão de 'Editar perfil' no campo de dados do perfil;
**Requisitos associados** | RF-005;
**Resultado esperado** | Ingressar até a página de edição de perfil e editar os dados desejados;
**Dados de entrada** | Ter clicado no botão 'Editar perfil;
**Resultado obtido** | -




**Caso de Teste** | **PB06 - Publicações realizadas pelo usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/userprofile.html <br> 2) Clique no ícone de balão para fazer um comentário; <br> 3) Clique no ícone de lápis para editar a publicação; <br> 4) Clique no ícone de lixeira para excluir a publicação; <br> 5) Clique em 'Novo Post' para postar algo novo no feed;
**Requisitos associados** | RF-006;
**Resultado esperado** | Conseguir comentar, editar e excluir publicações além de conseguir realizar um novo post;
**Dados de entrada** | Ter clicado em cada respectivo ícone e seção;
**Resultado obtido** | -





**Caso de Teste** | **PI07 - Página inicial do sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/forum.html <br>  2) Clique no ícone de lápis para iniciar um novo post; <br> 3) Clique em 'Comece um post' para iniciar um novo post; <br> 4) Clique no ícone de um coração para dar like nas publicações; <br> 5) Clique no ícone de balão para comentar nas publicações;
**Requisitos associados** | RF-007;
**Resultado esperado** | Conseguir adicionar posts, dar like e comentar em posts;
**Dados de entrada** | Ter clicado em cada respectivo ícone de acordo com o que o usuário deseja realizar;
**Resultado obtido** | -






**Caso de Teste** | **SV08 - Sessão de serviços**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/servicos.html <br>  2) Clique em 'Pesquisar' para pesquisar um perfil específico;
**Requisitos associados** | RF-008;
**Resultado esperado** | Ser direcionado para a página de serviços prestados no sistema ( Psicólogos, Advogados, Babás e Creches ) e conseguir realizar pesquisas;
**Dados de entrada** |  Ter clicado em cada respectiva seção na página e ter ingressado na mesma;
**Resultado obtido** | -





**Caso de Teste** | **MP09 - Sessão de mapa**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/mapa.html <br> 2) Clique nos botões de cada profissional, como psicólogo, por exemplo; <br> 3) Clique nos ícones que representa cada profissional, no mapa; <br> 4) Clique nos ícones de + e -;
**Requisitos associados** | RF-009;
**Resultado esperado** | Mostrar onde o respectivo profissional está situado, mostrar o perfil pessoal de cada profissional e dar zoom e diminuir zoom do mapa, respectivamente;
**Dados de entrada** | Ter clicado em cada respectivo ícone;
**Resultado obtido** | -



**Caso de Teste** | **NS10 - Redefinição de senha- Etapa 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/senha.html <br> 2) Preencha o campo de e-mail com um e-mail cadastrado no sistema; <br> 3) Clique no botão confirmar;
**Requisitos associados** | RF-10;
**Resultado esperado** | Ser direcionado para a próxima etapa de redefinição de senha;
**Dados de entrada** | Ter preenchido o campo de e-mail com um e-mail cadastrado no sistema e clicado no botão de confirmar;
**Resultado obtido** | -




**Caso de Teste** | **NS11 - Redefinição de senha- Etapa 2**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/código.html; <br> 2) Digite o código de 4 digítos enviado ao e-mail cadastrado; <br> 3) Clique no botão confirmar;
**Requisitos associados** | RF-11;
**Resultado esperado** | Ser direcionado para a próxima etapa de redefinição de senha;
**Dados de entrada** | Ter preenchido o campo de código enviado ao e-mail, com 4 digítos;
**Resultado obtido** | -



**Caso de Teste** | **NS12 - Redefinição de senha- Etapa 3**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://icei-puc-minas-pmv-si.github.io/pmv-si-2025-1-pe1-t4-start/src/nova-senha.html <br> 2) Escolha a nova senha de acordo com os critérios de criação de senha e confirme ( as senhas devem ser iguais e conter no minímo 8 carácteres  e máximo 14);
**Requisitos associados** | RF-12;
**Resultado esperado** | Ser direcionado para a página de login para utilizar a nova senha;
**Dados de entrada** | Ter preenchido todos os campos com senhas iguais e com os critérios de criação de senha;
**Resultado obtido** | -






## Registro dos Testes de Software

Esta seção tem como objetivo, mostrar os testes que foram realizados em cada página do sistema e seus respectivos resultados.

|*Caso de Teste*                                 |*CC01 - Criar conta profissional parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários profissionais façam  a primeira etapa de criação de conta |
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 



|*Caso de Teste*                                 |*CC02 - Criar conta profissional parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários profissionais criem uma conta |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 




|*Caso de Teste*                                 |*LS02 - Logar no sistema*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam entrar no sistema com uma conta já cadastrada. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar |



|*Caso de Teste*                                 |*LS02 - Redefinir senha- Etapa 1*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam digitar o e-mail cadastrado para recebimento de um código. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 




|*Caso de Teste*                                 |*LS02 - Redefinir senha- Etapa 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários digitem o código recebido no e-mail cadastrado. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 




|*Caso de Teste*                                 |*LS02 - Redefinir senha- Etapa 3*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários escolham  e digitem suas novas senhas de acordo com os critérios de criação de senha. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 






|*Caso de Teste*                                 |*LS02 - Página inicial do sistema*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam acessar a página inicial do sistema ( feed ) e interagir com a mesma. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 




|*Caso de Teste*                                 |*LS02 - Página de serviços cadastrados no sistema*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam acessar a página de perfis profissionais e possa interagir com a mesma. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 



|*Caso de Teste*                                 |*LS02 - Página de mapa*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam acessar a página de mapas e possa interagir com a mesma. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 



|*Caso de Teste*                                 |*LS02 - Publicações feitas pelo usuário*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam acessar a página de publicações já feitas e possa intergir com a mesma. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


|*Caso de Teste*                                 |*LS02 - Página de edição de perfil*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários possam acessar a página de edição de perfil e possam interagir com a mesma. |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 








## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



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
   
Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

O público alvo principal que tivemos o foco para realização do sistema, é o público alvo de Mães Solo. Essas mães, receberão apoio de profissionais engajados  a ajudá-las, dentro de nosso sistema.

De acordo com os usuário entrevistados em estapas iniciais anteriores, estes nos puderam repassar feedbacks de acordo com cada teste de cada seção do sistema, realizado.

 As primeiras telas/seções do sistema testadas que obteram um feedback em relação a seu uso, foram:
 1- Tela de login do sistema: Os usuários deram uma nota em escala 5, ou seja, ótima. Os usuários apresentaram satisfação com o layout da página pois entenderam claramente o que deveria ser feito nesta página e em relação ao layout e paleta de cores, que foi um dos pontos que um usuário citou positivamente, do sistema;
 
 2- Tela de cadastro do sistema: Os usuários que realizaram um teste desta tela, apresentaram, também, grande satisfação com esta tela, tendo a nota em escala 5, ou seja, ótimo. O feedback principal foi de facilidade em entender o que deveria ser feito pois a tela/layout era limpo e de fácil entendimento;

 3- Telas de cadastro profissional (etapa de cadastro 1 e 2): Em relação a esta tela, não obtivemos um público alvo de profissionais entrevistado anteriormente. Porém, com o teste realizado por outros usuários, os mesmo destacaram o feedback em escala 5, ou seja, ótimo. Os mesmos relataram que o layout é chamativo e os campos de digitação (placeholder) são de fácil entendimento;

 4- Telas de redefinição de senha (todas as etapas de redefinição de senha): Esta tela recebeu um feedback de layout em escala 5, ou seja, ótimo. Os usuários demonstraram estar contentes com a organização das telas e com a facilidade de realizar a possível mudança de senha;

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é um usuário que deseja acessar sua conta sem problemas, de acordo com os dados já cadastrados no sistema. |
| 2             | Você é um usuário que deseja, ao logar no sistema, conseguir realizar publicações, exclui-lás, curti-lás e comentar nas mesmas. |
| 3             | Você é um usuário profissional que deseja realizar um cadastro profissional sem muita dificuldade e confusão. |
| 4             | Você é um usuário  que deseja realizar um cadastro no sistema sem muita dificuldade e confusão. |
| 5             | Você é um usuário que deseja realizar a troca de senha em casos de esquecimento da mesma. |
| 6             | Você é um usuário que deseja editar seu perfil e seus dados adicionados no momento de criação de conta. |
| 7             | Você é um usuário que deseja excluir seu perfil caso desejado. |
| 8             | Você é um usuário que deseja visualizar todas suas publicações feitas e conseguir editar ou excluir elas. |
| 9             | Você é um usuário que deseja ter acesso aos profissionais cadastrados no sistema e seus perfis pessoais. |
| 10            | Você é um usuário que deseja ter acesso ás localizações de cada profissional, no mapa e conseguir ter acesso aos seus perfis pessoais. |




## Registro de Testes de Usabilidade

Cenário 1: Você é um usuário que deseja acessar sua conta sem problemas, de acordo com os dados já cadastrados no sistema.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10 segundos                  |
| 2       | SIM             | 5                    | 11 segundos                  |
| 3       | SIM             | 5                    | 9 segundos                   |
|  |  |  |  |
| **Média**     | 98%           | 5                | 30 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 9 segundos |


    Comentários dos usuários: Fácil uso, sem muita confusão. Objetivo e direto ao ponto, layout de fácil entendimento. 




Cenário 2:  Você é um usuário profissional que deseja realizar um cadastro profissional sem muita dificuldade e confusão (Inclui todas as etapas de cadastro profissional, juntas).

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 40 segundos                     |
| 2       | SIM             | 5                    | 35 segundos                     |
| 3       | SIM             | 5                    | 20 segundos                     |
|  |  |  |  |
| **Média**     | 100%           | 5.00               | 95 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 1 minuto 5 segundos |

    Comentários dos usuários: Fácil uso e tela de fácil entendimento.




Cenário 3: Você é um usuário que deseja realizar a troca de senha em casos de esquecimento da mesma (Inclui todas as etapas de redefinição de senha, juntas)

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 18                          |
| 2       | SIM             | 5                    | 15                          |
| 3       | SIM             | 5                    | 15                          |
|  |  |  |  |
| **Média**     | 99%           | 5.00               | 48 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 16 segundos |

    Comentários dos usuários: De uso simples, não contendo dificuldade para mudança de senha. 





Cenário 4: Você é um usuário  que deseja realizar um cadastro no sistema sem muita dificuldade e confusão.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 8 segundos                          |
| 2       | SIM             | 5                    | 11 segundos                          |
| 3       | SIM             | 4                    | 9 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5.00                | 28 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10 segundos |

    Comentários dos usuários: Tela limpa e de fácil entendimento das escritas. 


    

Cenário 2: Você é um usuário que deseja, ao logar no sistema, conseguir realizar publicações, exclui-lás, curti-lás e comentar nas mesmas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |

    Comentários dos usuários: Fácil uso, sem muita confusão. Objetivo e direto ao ponto, layout de fácil entendimento. (Editar)




    OUTROS CENÁRIOS DE OUTRAS PÁGINAS:
Cenário 2:  Você é um usuário que deseja editar seu perfil e seus dados adicionados no momento de criação de conta..

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |



Cenário 2: Você é um usuário que deseja excluir seu perfil caso desejado.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |



Cenário 2: Você é um usuário que deseja visualizar todas suas publicações feitas e conseguir editar ou excluir elas..

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |



Cenário 2: Você é um usuário que deseja ter acesso aos profissionais cadastrados no sistema e seus perfis pessoais..

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |



Cenário Você é um usuário que deseja ter acesso ás localizações de cada profissional, no mapa e conseguir ter acesso aos seus perfis pessoais..

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



