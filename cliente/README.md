# Frontend do Projeto Crud da Alegria

Bem-vindo ao diretório `cliente` do Projeto Crud da Alegria. Este diretório contém o código-fonte do frontend desenvolvido em Angular. Atualmente, o projeto está estruturado com sua arquitetura de pastas e esquemas de rota definidos. As únicas páginas disponíveis no momento são a de "Página Não Encontrada" e a tela de "login", que está exatamente igual ao protótipo e é responsiva.

## Pré-requisitos

### Política de Execução de Scripts no Windows

Em computadores Windows, a execução de scripts PowerShell está desabilitada por padrão. 

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Instalar Angular CLI

Para instalar o Angular CLI globalmente, execute o seguinte comando:

```powershell
npm install -g @angular/cli
```

### Instalar Dependências

Instale todas as dependências do projeto:

```powershell
npm install
```

### Iniciar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, você pode usar um dos seguintes comandos:

```powershell
npm run start
```

#### Usando Angular CLI localmente com npx

Caso você não queira instalar o Angular CLI globalmente, pode utilizar o seguinte comando:

```powershell
npx ng serve
```

## Estrutura de Pastas

TODO: adicionar explicação depois

## Páginas Disponíveis

* **Página Não Encontrada** : Página de erro 404 para rotas não encontradas.
* **Tela de Login** : Página de login com layout CSS responsivo.

## Notas Adicionais

* A tela de login está apenas com o layout CSS implementado e é totalmente responsiva.
* A estrutura do projeto está preparada para adições futuras e melhorias contínuas.
