# Programação de Funcionalidades

O sistema que está sendo realizado, com o intuito de resolver os problemas sofridos pelas mãe solo no mercado de trabalho, possui diversos requisitos funcionais presente no mesmo, e que serão citados abaixo. Vale-se ressaltar que, estes requisitos são extremamente essenciais para que a o sistema seja rico e completo para uso. 


## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário publique no fórum  | Gustavo | fórum.html |
|RF-002| A aplicação deve permitir que Advogados e Psicólogos se cadastrem no sistema | Laila |  cadastro-profissional.html |
|RF-002| A aplicação deve permitir que Babas e Creches se cadastrem no sistema    | Laila |  cadastroprof.html |
|RF-003| A aplicação deve permitir que os usuários editem seus perfis  | Maria Clara | edit-userprofile.html |
|RF-004| A aplicação deve permitir que o usuário possa logar no sistema | Laila   | index.html |
|RF-005| A aplicação deve permitir que o usuário possa se cadastrar no sistema    | Laila | cadastro.html |
|RF-001| A aplicação deve permitir página com profissionais cadastrados | Thiago  | servicos.html |
|RF-001| A aplicação deve permitir aba de mapa com localizações dos profissionais | Ava | mapa.html |
|RF-001| A aplicação deve permitir página para acessar publicações já feitas  | Maria Clara | userprofile.html |
|RF-001| A aplicação deve permitir troca de senha por esquecimento | Laila | nova-senha.html |
|RF-001|A aplicação deve permitir troca de senha por esquecimento  | Laila | senha.html|
|RF-001| A aplicação deve permitir troca de senha por esquecimento | Laila | código.html |



## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |




## Landing page
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título da página                          | Bem vindos ao sistema                          |
| Botão          | Botões informativos | Direções para outras páginas            | Crie sua conta, Para profissionais             |
| Descrições     | Texto             | Apresentação do site                      | Sobre nós, nosso objetivo e nossos serviços    |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |






## Página de Login:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Login                                          |
| Subtítulo      | Texto             | Segundo título                            | Bem vindos ao nosso sistema!                   |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | E-mail e Senha                                 |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Conteúdo       | Botão             | Entrar                                    | Entrar no sistema após preencher todos os campos  |
| Link           | Botão             | Informações adicionais                    | Não possui uma conta? Cadastre-se              |
| Conteúdo       | Link              | 'Esqueci a senha'                         | Ao esquecer senha, clicar na informação e realizar troca de senha |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |






## Página de cadastro:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro                                       |
| Subtítulo      | Texto             | Segundo título                            | Bem vindos ao nosso sistema!                   |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome completo, E-mail, Senha e Confirmar Senha |
| Conteúdo       |Botão              | Cadastro no sistema                       | Cadastrar no sistema após preencher todos os campos |
| Link           | Botão             | Informações adicionais                    | Faça Login ou Cadastre-se profissionalmente    |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |






## Página de cadastro de profissionais:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro profissional                          |
| Subtítulo      | Texto             | Segundo título                            | Informações pessoais                           |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome completo, E-mail, Senha, Confirmar Senha  |
| Conteúdo       | Botão             | Botão 'Prosseguir'                        | Prosseguir para a próxima etapa do cadastro profissional |
| Descrição      | Texto             | Informações adicionais                    | Já possui uma conta? Faça login                |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo  |






## Página de cadastro de profissionais, etapa 2 (Babas e Creches) :
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro profissional                          |
| Subtítulo      | Texto             | Segundo título                            | Informações profissionais                      |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Especialidade e Cidade                         |
| Conteúdo       | Botão             | Botão 'Cadastrar'                         | Terminar a sessão e se cadastrar no sistema    |
| Descrição      | Texto             | Informações adicionais                    | Já possui uma conta? Faça login                |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |




## Página de cadastro de profissionais, etapa 2 ( Advogados e Psicólogos ) :
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro profissional                          |
| Subtítulo      | Texto             | Segundo título                            | Informações profissionais                      |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Especialidade, Registro profissional e Cidade  |
| Conteúdo       | Botão             | Botão 'Cadastrar'                         | Terminar a sessão e se cadastrar no sistema    |
| Descrição      | Texto             | Informações adicionais                    | Já possui uma conta? Faça login                |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |







## Página de 'Esqueci a senha':
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Digite seu E-mail de cadastro                  |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | E-mail                                         |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar o email cadastrado e seguir para a próxima etapa  |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |






## Página de código para redefinição de senha:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Digite o código enviado ao seu E-mail          |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Digite aqui seu código                         |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar o código recebido e prosseguir para  próxima etapa |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |




## Página para escolha de nova senha:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Escolha sua nova senha                         |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Digite sua nova senha e Confirmar senha        |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar a nova senha criada e terminar a etapa de troca de senha |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |




## Página para edição de perfil:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Editar perfil                                  |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome, E-mail, Data de nascimento, Quantos filhos você tem e Localização |
| Conteúdo       | Botão             | Botão de confirmação                      | Salvar                                         |
| Documento      | ícone             | User                                      | ícone de user                                  |
| Conteúdo       | Botão             | Botão de escolha de foto                  | Botão que permite, ao clicar, escolher uma foto para o perfil  |
| Título         | Texto             | Título-> elemento texttarea               | Sobre mim                                      |
| Conteúdo       | Elemento textarea | Campo de digitação                        | Escreva uma breve descrição sobre você         |
| Conteúdo       | Botão             | Botão de exclusão                         | Botão que, ao clicar, permite exclusão da conta|
| Documento      | Imagem            | Foto de perfil                            |  Se selecionada, aparecerá a foto de perfil    |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |



## Página de informações do perfil:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Meus posts                                     |
| Título         | Texto             | Permissão para publicar novo post         | Ao clicar em 'Novo post', postar algo novo     |
| Título         | Texto             | Título do post                            | Título colocado no post                        |
| Conteúdo       | Texto             | Textos de post                            | Texto acompanhando imagens postadas            |
| Documento      | Imagem            | Imagem de post                            | Imagem de cada post                            |
| Documento      | ícone             | ícone de balão                            | ícone que permite, ao clicar, fazer um comentário no post  |
| Documento      | ícone             | ícone de lápis                            | ícone que permite, ao clicar, começar um post  |
| Documento      | ícone             | ícone de lixeira                          | ícone que permite, ao clicar, excluir um post  |
| Conteúdo       | Inputs (placeholder)| Campos de dados (canto esquerdo)        | Nome, Sobre mim, Data de nascimento, Filhos, Localização e Email |
| Conteúdo       | Botão             | Botão de edição                           | Ao clicar, ser direcionado a página de edição de perfil |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |
                              



## Página de fórum:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Nome de cada usuário                      | Jéssica da silva e outros                      |
| Documento      | Imagem            | Imagem de posts                           | Imagem vinculada a seus respectivos posts      |
| Documento      | ícones            | Fotos de perfil                           | Fotos de identificação dos usuários            |
| Documento      | Texto             | Texto de cada post                        | Textos publicados em cada post                 |
| Documento      | ícone             | Ícone para curtir posts                   | ícone de coração para curtir os posts do feed   |
| Documento      | ícone             | ícone de lápis (canto inferior esquerdo)   | ícone que permite, ao clicar, começar um post   |
| Documento      | ícone             | ícone de Balão                             | ícone que permite, ao clicar, fazer um comentário |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |



## Página de serviços:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Nome de usuário de cada perfil            | Jéssica Soares, Lorena Magalhães e outros      |
| Título         | Texto             | Título de cada sessão de serviços         | Título de cada serviço: Como Psicólogos        |   
| Conteúdo       | Input ("search")  | Elemento para pesquisa                    | Elemento para pesquisar serviços do sistema    |
| Documento      | Image             | Imagens dos perfis                        | Imagens dos perfis de cada profissional        |
| Documento      | Caractere         | Estrelas de avaliação                     | Avaliação de cada profissional, por sessão     |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |





## Página de mapa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Imagem         | Ícones            | ícones de cada profissão                  | ícone de carrinho de bebe: Baba                |
| Imagem         |Street view        | Mapa                                      | Endereços de cada profissional                 |
| Texto          | Texto             | Nome das profissões em botoões            | Psicólogos, Advogados, Babas e Creches         |
| Imagem         | ícone             | Ícones de zoom e diminuir zoom            | ícone + (aumenta zoom) e - (diminui)           |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |



-
