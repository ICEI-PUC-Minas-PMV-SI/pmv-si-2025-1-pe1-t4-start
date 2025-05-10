# Programação de Funcionalidades

O sistema que está sendo realizado, com o intuito de resolver os problemas sofridos pelas mãe solo no mercado de trabalho, possui diversos requisitos funcionais presente no mesmo, e que serão citados abaixo. Vale-se ressaltar que, estes requisitos são extremamente essenciais para que a o sistema seja rico e completo para uso. 


## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário publique no fórum  | Gustavo | fórum.html |
|RF-002| A aplicação deve permitir que usuários profissionais se cadastrem no sistema | Laila|  cadastro-profissional.html |
|RF-003| A aplicação deve permitir que os usuários editem seus perfis  | Maria Clara | edit-userprofile.html |
|RF-004| A aplicação deve permitir que o usuário possa logar no sistema | Laila | index.html |
|RF-005| A aplicação deve permitir que o usuário possa se cadastrar no sistema  | Laila | cadastro.html |
|RF-001| A aplicação deve permitir página com serviços cadastrados | Thiago | servicos.html |
|RF-001| A aplicação deve permitir aba de perfis com mapas (página de creche feita para referência) | Ava | creches.html |
|RF-001| A aplicação deve permitir página para acessar publicações já feitas  | Maria Clara | edit-userprofile.html |
|RF-001| A aplicação deve permitir aba de perfis de creches  | Ava | creches.html |
|RF-001| A aplicação deve permitir troca de senha por esquecimento| Laila | nova-senha.html |
|RF-001|A aplicação deve permitir troca de senha por esquecimento  | Laila |senha.html|
|RF-001| A aplicação deve permitir troca de senha por esquecimento  | Laila | código.html |



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
| Botão          | Botões informativos  | Direções para outras páginas           | Crie sua conta, Para profissionais             |
| Descrições     | Texto             | Apresentação do site                      | Sobre nós, nosso objetivo e nossos serviços    |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página de Login:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Login                                          |
| Subtítulo      | Texto             | Segundo título                            | Bem vindos ao nosso sistema!                   |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | E-mail e Senha                                 |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Conteúdo        |Botão              | Cadastro no sistema                      | Login                                          |
| Link           |Botão              | Informações de conta                      | Não possui uma conta? Cadastre-se              |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |


## Página de cadastro:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro                                       |
| Subtítulo      | Texto             | Segundo título                            | Bem vindos ao nosso sistema!                   |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome completo, E-mail, Senha e Confirmar Senha |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Conteúdo       |Botão              | Cadastro no sistema                       | Cadastrar                                      |
| Link           |Botão              | Informações de conta                      | Faça Login ou Cadastre-se profissionalmente    |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página de cadastro de profissionais:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Cadastro profissional                          |
| Subtítulo      | Texto             | Segundo título                            | Bem vindos ao nosso sistema!                   |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome completo, E-mail, Senha, Confirmar Senha, Especialidade e Resgistro profissional |
| Conteúdo       | Checkbox          | Informações de acesso                     | Lembrar acesso                                 |
| Conteúdo       |Botão              | Cadastro no sistema                       | Cadastrar                                      |
| Descrição      |Texto              | Informações de conta                      |Já possui uma conta? Faça login                 |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo

## Página de 'Esqueci a senha':
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Digite seu E-mail de cadastro                  |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | E-mail                                         |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar                                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página de criação de nova senha:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Escolha sua nova senha                         |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Digite a nova senha e Confirmar senha          |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar                                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página de código para redefinição de senha:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Digite o código enviado ao seu E-mail          |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Digite aqui seu código                         |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar                                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página para escoha de nova senha:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Redefinir senha                                |
| Subtítulo      | Texto             | Segundo título                            | Escolha sua nova senha                         |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Digite sua nova senha e Confirmar senha        |
| Conteúdo       | Botão             | Botão de confirmação                      | Confirmar                                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |

## Página para edição de perfil:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título inicial                            | Editar perfil                                  |
| Subtítulo      | Texto             | Segundo título                            | Escolha sua nova senha                         |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome, E-mail, Quantos filhos você tem e Localização |
| Conteúdo       | Botão             | Botão de confirmação                      | Salvar                                         |
| Documento      | ícone             | User                                      | ícone de user para demonstração                |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo |
| Conteúdo       | Botão             | Botão de escolha de foto                  | Escolha sua foto                               |
| Título         | Texto             | Título-> elemento texttarea               | Sobre mim                                      |
| Conteúdo       | Elemento textarea | Campo de digitação                        | Escreva uma breve descrição sobre você         |

## Página de informações do perfil:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                         |
|:--------------:|-------------------|-------------------------------------------|-----------------------------------------------     -|
| Título         | Texto             | Título inicial                            | Meus posts                                          |
| Título         | Texto             | Título do post                            | Título colocado no post                             |
| Conteúdo       | Texto             | Textos de post                            | Texto acompanhando imagens postadas                 |
| Documento      | Imagem            | Imagem de post                            | Imagem de cada post                                 |
| Documento      | ícone             | User                                      | ícone de user para demonstração                     |
| Conteúdo       | Inputs (placeholder)| Campos de dados                         | Nome, Sobre mim, Data de nascimento, Filhos e localização |
| Conteúdo       | Botão             | Botão de edição                           | Editar perfil                                       |
| Documento      | ícone             | User                                      | ícone de user para demonstração                     |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo  |
                              


## Página de fórum:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                         |
|:--------------:|-------------------|-------------------------------------------|-----------------------------------------------     -|
| Título         | Texto             | Nome de cada usuário                      | Jéssica da silva e outros                           |
| Documento      | Imagem            | Imagem de posts                           | Imagem vinculada a seus respectivos posts           |
| Documento      | ícones            | Fotos de perfil                           | Fotos de identificação dos usuários                 |
| Documento      | Texto             | Texto de cada post                        | Textos publicados em cada post                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo  |


## Página de serviços:
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                         |
|:--------------:|-------------------|-------------------------------------------|-----------------------------------------------     -|
| Título         | Texto             | Nome de usuário de cada perfil            | Jéssica da Soares, Lorena Magalhães e outros        |
| Título         | Texto             | Título de cada sessão de serviços         | Título de cada serviço: Psicólogos, por exemplo.    |   
| Conteúdo       | Input ("search")  | Elemento para pesquisa                    |Elemento para pesquisar serviços do sistema          |
| Documento      | Texto             | Texto de cada post                        | Textos publicados em cada post                      |
| Documento      | Imagem            | Logo do sistema                           | Logo nomeada mães em foco, canto superior esquerdo  |



## Perfil Creches
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome           | Texto             | Nome da creche                            | Creche Encanto                                 |
| Endereço       | Texto             | Endereço da creche                        | Rua Exemplo,                                   |
| Contato        | Texto             | Whatsapp da Creche                        | 31-999999999                                   |
| Latitude       | Numero (Decimal)  | Latitude para mapa                        | -19.9245                                       |
| Longitude     | Numero (Decimal)  | Longitude para mapa                       | -45.9245                                       |
| Nota média     | Numero (Decimal)  | Média da avaliação de usuários            | 5                                              |
| Comentário     | Texto             | Texto da avaliação                        | Ambiente seguro e acolhedor                    |


-
