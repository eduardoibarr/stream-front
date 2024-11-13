# Projeto Stream

Este projeto é um front-end construído usando Vite, configurado para comunicação com uma API através de requisições autenticadas. Ele inclui configurações de autenticação básica, uso de variáveis de ambiente e estrutura organizada para componentes e hooks.

## Tecnologias Utilizadas

- **Vite** - Ferramenta de build rápida para desenvolvimento front-end
- **React** - Biblioteca JavaScript para criação de interfaces de usuário
- **TypeScript** - Superset de JavaScript com tipagem estática opcional
- **Axios** - Cliente HTTP para consumo de APIs
- **React Query** - Gerenciamento de estado para requisições assíncronas
- **Tailwind CSS** - Framework de CSS utilitário para estilos rápidos e responsivos

## Requisitos

- Node.js
- NPM

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/eduardoibarr/stream-front.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd stream-front
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn
   ```

## Configuração de Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para a configuração da API. Crie um arquivo \`.env\` na raiz do projeto e defina as seguintes variáveis:

```plaintext
VITE_API_URL=exemplo
VITE_APP_API_USERNAME=exemplo
VITE_APP_API_PASSWORD=exemplo
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- \`npm run dev\` - Executa o aplicativo em modo de desenvolvimento.\
  Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.
- \`npm run build\` - Compila o aplicativo para produção na pasta \`dist\`.
- \`npm run serve\` - Serve o aplicativo compilado a partir da pasta \`dist\`.

## Estilos

O projeto utiliza **Tailwind CSS** para estilos rápidos e responsivos. As configurações de Tailwind podem ser encontradas no arquivo \`tailwind.config.js\`.

## Contato

Para dúvidas ou sugestões, entre em contato com [comigo](mailto:eduardoibarr56@gmail.com).

---
