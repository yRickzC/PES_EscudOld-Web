import type { Locale } from './ui';

const pt = {
  project: {
    label: 'O projeto',
    title: ['A tecnologia avança.', 'O cuidado vai junto.'],
    introduction: ['Uma mensagem pode parecer verdadeira.', 'Um pedido pode vir com pressa.', 'E a dúvida pode acontecer com qualquer pessoa.'],
    description: 'O DOld propõe um apoio na hora da dúvida: você compartilha uma mensagem suspeita e recebe uma explicação sobre os sinais de alerta.',
  },
  how: {
    label: 'Como funciona',
    title: 'Da dúvida à orientação, em 3 passos.',
    description: 'A proposta é simples: conversar, entender e agir com mais cuidado.',
    steps: [
      { title: 'Recebeu algo estranho?', description: 'Um link, uma cobrança ou um pedido urgente fez você desconfiar? Pare antes de responder.', label: 'Mensagem suspeita', example: '“É mesmo você? Preciso de um Pix agora.”' },
      { title: 'Pergunte ao DOld', description: 'Compartilhe a mensagem no WhatsApp do DOld, sem enviar senhas ou dados sensíveis.', label: 'Sua pergunta', example: '“Recebi isso. Pode ser um golpe?”' },
      { title: 'Entenda os sinais', description: 'A IA apontaria indícios de risco e sugeriria cuidados. Você decide o próximo passo com calma.', label: 'Orientação do DOld', example: '“Desconfie da urgência. Confirme por outro canal.”' },
    ],
  },
  signals: {
    label: 'O que merece sua atenção',
    title: 'Golpes mudam. Os sinais se repetem.',
    description: 'O DOld ajudaria a reconhecer padrões como estes:',
    items: [
      { title: 'Pressa para você agir', description: '“É só até hoje.” “Sua conta será bloqueada.” A urgência tenta impedir que você pense.' },
      { title: 'Pedidos de senhas e dados', description: 'Códigos de verificação, senhas e dados bancários não devem ser compartilhados em conversas.' },
      { title: 'Links e cobranças inesperadas', description: 'Um endereço estranho ou uma taxa surpresa pedem confirmação em um canal oficial.' },
      { title: 'Alguém se passando por conhecido', description: 'Uma foto familiar não confirma a identidade. Ligue para um número que você já conhece.' },
    ],
  },
  example: {
    label: 'Na prática',
    title: ['Não basta alertar.', 'É preciso explicar.'],
    description: 'Veja como uma orientação pode ajudar a entender o que está por trás da mensagem.',
    messageLabel: 'Mensagem recebida',
    message: '“Olá, sou do seu banco. Identificamos uma compra suspeita. Clique aqui e informe sua senha para cancelar.”',
    explanationLabel: 'O que o DOld poderia explicar',
    stepLabel: 'Etapa',
    explanations: [
      { title: 'O pedido de senha é um alerta', description: 'Não informe senhas ou códigos recebidos por SMS em uma conversa.' },
      { title: 'O medo está sendo usado como pressão', description: 'Uma suposta compra pode fazer você agir sem conferir quem enviou a mensagem.' },
      { title: 'Confirme pelo canal oficial', description: 'Abra o aplicativo do banco por conta própria ou ligue para o número do seu cartão.' },
    ],
  },
  faq: {
    label: 'Dúvidas frequentes',
    title: ['Informação clara.', 'Cuidado de verdade.'],
    description: 'Entenda a proposta e os limites do DOld.',
    items: [
      { question: 'O que os exemplos desta página mostram?', answer: 'As conversas são ilustrativas e mostram como o DOld poderia ajudar a reconhecer sinais de golpes digitais.' },
      { question: 'O DOld garante que uma mensagem é segura?', answer: 'Não. A IA pode errar e não identifica todos os golpes. Na dúvida, não clique e confirme por um canal oficial.' },
      { question: 'Preciso baixar um aplicativo novo?', answer: 'A proposta é funcionar dentro do WhatsApp, para tornar o uso mais familiar para pessoas com 60 anos ou mais.' },
      { question: 'Quais dados eu não devo compartilhar?', answer: 'Nunca envie senhas, códigos, documentos ou dados bancários. Oculte informações pessoais antes de compartilhar mensagens.' },
    ],
  },
  closing: {
    label: 'Segurança digital começa com uma pausa',
    title: ['Antes de clicar,', 'conte com mais informação.'],
    description: 'Mais informação para reconhecer golpes, mais tranquilidade para usar a tecnologia e mais segurança para toda a família.',
    action: 'Relembre como funciona',
  },
};

const en: typeof pt = {
  project: {
    label: 'The project',
    title: ['Technology moves forward.', 'Care comes along.'],
    introduction: ['A message can look genuine.', 'A request can come with urgency.', 'And anyone can feel unsure.'],
    description: 'DOld proposes support when you feel unsure: share a suspicious message and receive an explanation of the warning signs.',
  },
  how: {
    label: 'How it works',
    title: 'From doubt to guidance, in 3 steps.',
    description: 'A simple idea: talk, understand and act with more care.',
    steps: [
      { title: 'Received something unusual?', description: 'Did a link, a payment request or an urgent message make you suspicious? Pause before replying.', label: 'Suspicious message', example: '“Is that really you? I need a money transfer now.”' },
      { title: 'Ask DOld', description: 'Share the message with DOld on WhatsApp, without sending passwords or sensitive details.', label: 'Your question', example: '“I received this. Could it be a scam?”' },
      { title: 'Understand the signs', description: 'AI would point out warning signs and suggest precautions. You decide what to do next, without rushing.', label: 'DOld’s guidance', example: '“Be wary of urgency. Confirm through another channel.”' },
    ],
  },
  signals: {
    label: 'What deserves your attention',
    title: 'Scams change. The signs repeat.',
    description: 'DOld would help you recognise patterns like these:',
    items: [
      { title: 'Pressure to act quickly', description: '“Today only.” “Your account will be blocked.” Urgency tries to stop you from thinking.' },
      { title: 'Requests for passwords and details', description: 'Verification codes, passwords and bank details should never be shared in conversations.' },
      { title: 'Unexpected links and charges', description: 'An unfamiliar address or a surprise fee calls for confirmation through an official channel.' },
      { title: 'Someone posing as a person you know', description: 'A familiar photo does not confirm identity. Call a number you already know.' },
    ],
  },
  example: {
    label: 'In practice',
    title: ['A warning is not enough.', 'An explanation matters.'],
    description: 'See how guidance could help you understand what is behind a message.',
    messageLabel: 'Message received',
    message: '“Hello, this is your bank. We detected a suspicious purchase. Click here and enter your password to cancel it.”',
    explanationLabel: 'What DOld could explain',
    stepLabel: 'Step',
    explanations: [
      { title: 'The password request is a warning sign', description: 'Do not share passwords or codes received by text in a conversation.' },
      { title: 'Fear is being used to pressure you', description: 'A supposed purchase can make you act before checking who sent the message.' },
      { title: 'Confirm through the official channel', description: 'Open your bank’s app yourself or call the number printed on your card.' },
    ],
  },
  faq: {
    label: 'Frequently asked questions',
    title: ['Clear information.', 'Thoughtful care.'],
    description: 'Understand the proposal and the limits of DOld.',
    items: [
      { question: 'What do the examples on this page show?', answer: 'The conversations are illustrative and show how DOld could help identify warning signs of online scams.' },
      { question: 'Does DOld guarantee a message is safe?', answer: 'No. AI can make mistakes and cannot identify every scam. If in doubt, do not click and confirm through an official channel.' },
      { question: 'Do I need to download a new app?', answer: 'The proposal is to work within WhatsApp, making it more familiar for people aged 60 and over.' },
      { question: 'What information should I never share?', answer: 'Never send passwords, codes, documents or bank details. Hide personal information before sharing messages.' },
    ],
  },
  closing: {
    label: 'Digital safety starts with a pause',
    title: ['Before you click,', 'give yourself more information.'],
    description: 'More information to recognise scams, more confidence using technology and more safety for the whole family.',
    action: 'Review how it works',
  },
};

export const landingContent: Record<Locale, typeof pt> = { 'pt-br': pt, en };
