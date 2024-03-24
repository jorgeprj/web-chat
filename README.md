# Chat App via Email

Este é um projeto de Chat App que utiliza autenticação via email e integração com o Firebase. O objetivo deste aplicativo é permitir que os usuários conversem entre si por meio de mensagens em tempo real.

Este projeto foi criado como parte de uma iniciativa para talvez implementá-lo em um possível novo site do PET-BCC, oferecendo uma forma de comunicação entre os membros do grupo.

## Funcionalidades

- Autenticação de usuários via email
- Envio e recebimento de mensagens em tempo real

## Tecnologias Utilizadas

- React.js
- Firebase (para autenticação e armazenamento de dados em tempo real)
- Styled Components (para estilização)
- Atomic Design (para organização e estruturação de componentes)

## Como Utilizar

1. Clone este repositório para o seu ambiente local.
2. Instale as dependências usando `npm install`.
3. Configure o Firebase no arquivo `services/firebase.js` com suas credenciais.
4. Inicie o aplicativo usando `npm start`.
5. Abra o aplicativo em seu navegador.

## Estrutura de Diretórios

O projeto segue uma estrutura baseada no Atomic Design, onde os componentes são organizados em átomos, moléculas, organismos, templates e páginas. Aqui está uma visão geral da estrutura de diretórios:

- **atoms**: Componentes simples e básicos, como botões, ícones, inputs.
- **molecules**: Componentes compostos por dois ou mais átomos, como um card.
- **organisms**: Componentes compostos por moléculas e/ou átomos, como uma barra de navegação.
- **pages**: Componentes que representam páginas específicas do aplicativo, como a página de login e a página de chat.

Para entender melhor leia [Atomic Design: Uma Breve Visão Geral](/ATOMIC.md)

## Próximos Passos

Como próximos passos, há várias melhorias que podem ser implementadas para aprimorar a experiência do usuário (UI/UX) e adicionar funcionalidades adicionais:

- **Melhorias na Interface (UI/UX)**: Explorar e implementar novas ideias de design para tornar a interface mais intuitiva, atraente e responsiva em diferentes dispositivos.
  
- **Barra de Pesquisa para Mensagens**: Implementar barra de pesquisa para permitir que os usuários pesquisem por mensagens gerais e dentro de uma conversa específicas. Isso facilitaria a localização de mensagens antigas e relevantes.

- **Sistema de Visualização de Mensagens**: Implementar um sistema de visualização de mensagens para indicar quando uma mensagem foi visualizada pelo destinatário. Isso ajudaria os usuários a saber quando suas mensagens foram lidas.

- **Notificações em Tempo Real**: Adicionar notificações em tempo real para informar aos usuários sobre novas mensagens recebidas, mesmo quando o aplicativo não está ativo.


- **Novas páginas**: Implementar as outras páginas (Membros e Projetos). Os projetos seriam grupos de usuarios para se comunicar sobre aquele determinado projeto. E na página de membros seria possível visualizar todos os membros do PET-BCC.

Essas são apenas algumas ideias de recursos que podem ser exploradas para tornar o aplicativo de chat ainda mais funcional e envolvente para os usuários.

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

