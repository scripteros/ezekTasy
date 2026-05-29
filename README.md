# Ezek Tasy

Extensao para Chrome/Edge que personaliza o Tasy HTML, altera o tema visual da aplicacao e mostra metadados tecnicos dos campos, como tabela, atributo, tipo e detalhes capturados pelo painel de ajuda do Tasy.

Projeto oficial: [github.com/scripteros/ezekTasy](https://github.com/scripteros/ezekTasy)

## Instalar no Chrome

1. Baixe ou clone este projeto.
2. Abra `chrome://extensions`.
3. Ative `Modo do desenvolvedor`.
4. Clique em `Carregar sem compactacao`.
5. Selecione a pasta `dist`.
6. Acesse ou recarregue o Tasy HTML.

## Instalar no Microsoft Edge

1. Abra `edge://extensions`.
2. Ative `Modo do desenvolvedor`.
3. Clique em `Carregar sem compactacao`.
4. Selecione a pasta `dist`.
5. Recarregue o Tasy HTML.

## Como Usar

- Clique no icone da extensao `Ezek Tasy`.
- Use `Extensao ativa` para ligar ou desligar todos os recursos em tempo real.
- Use `Metadados nos campos` para mostrar ou ocultar tabela, atributo e detalhes tecnicos acima dos campos.
- Escolha um tema para mudar as cores da aplicacao.
- Ajuste fonte, tamanho dos textos, cor dos campos, cor dos botoes e estilos visuais.
- Na tela inicial do Tasy, use as setas laterais criadas pela extensao para avancar ou voltar as paginas do carrossel.
- A area de doacao mostra o QR Code para apoio ao desenvolvimento.

## Metadados Dos Campos

A extensao usa informacoes que ja existem no HTML do Tasy e tambem captura os dados exibidos quando o usuario abre o icone de ajuda do campo.

Quando disponivel, ela mostra:

- Tabela
- Atributo
- Tipo do atributo
- Visao
- Label
- Obrigatoriedade
- Informacoes DOM uteis para desenvolvimento

Ao clicar no metadado exibido acima do campo, a extensao abre um modal com os detalhes tecnicos coletados.

## Gerar Versao Ofuscada

A versao de distribuicao fica em `dist` e e gerada com JavaScript ofuscado.

```powershell
npm install
npm run check
npm run build
```

Depois do build, instale a extensao usando a pasta `dist`.

## Publicacao No GitHub

Este projeto foi preparado para publicar no GitHub a versao ofuscada em `dist`, sem expor os arquivos fonte locais de trabalho.

Repositorio:

```text
https://github.com/scripteros/ezekTasy
```

## Observacoes

- Esta versao esta configurada para `https://tasy.sepaco.org.br/*`.
- Nao coloque senhas, tokens ou chaves privadas dentro da extensao.
- Ofuscacao dificulta copia e alteracao, mas nao torna uma extensao Chrome impossivel de inspecionar.

## Creditos

Desenvolvedor da API: Analista de Sistema Ezequiel Oliveira.

Todos os direitos reservados.
