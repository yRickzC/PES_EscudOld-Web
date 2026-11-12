const ui = {
  'pt-br': {
    navigation: 'Navegação principal',
    whoWeAre: 'Quem somos',
    aboutProject: 'Sobre o projeto',
    themeLight: 'Usar tema claro',
    themeDark: 'Usar tema escuro',
    skip: 'Ir para o conteúdo',
    project: 'O projeto',
    how: 'Como funciona',
    example: 'Ver exemplo',
    backToTop: 'Voltar ao início',
    pageTitle: 'EscudOld | Antes de clicar, pergunte ao EscudOld',
    titleFirst: 'Antes de clicar,',
    titleSecond: 'pergunte ao EscudOld.',
    description:
      'O EscudOld propõe usar IA no WhatsApp para ajudar pessoas idosas a reconhecer possíveis golpes digitais.',
    discover: 'Conheça o projeto',
    phoneImage: 'Conversa no WhatsApp',
    phoneImageDescription: 'Captura de uma conversa em que uma pessoa envia um aviso suspeito e recebe uma explicação do EscudOld.',
    previewMessage: '“Seu e-mail está sem espaço. Pague agora para continuar usando.”',
    previewLabel: 'Exemplo de mensagem suspeita',
    previewFamilyMessage: '“Mãe, troquei de número. Preciso de um Pix urgente!”',
    previewBankMessage: '“Sua conta será bloqueada! Atualize seus dados neste link.”',
    previewPrizeMessage: '“Você ganhou um prêmio! Pague a taxa para receber.”',
    previewDeliveryMessage: '“Sua encomenda foi retida. Pague a taxa para liberar a entrega.”',
    previewCodeMessage: '“Me envie o código de seis dígitos que acabou de chegar no seu celular.”',
    problemTitle: 'Um aviso pode parecer oficial.',
    problemDescription:
      'Um anúncio diz que seu e-mail está sem espaço e pede que você resolva isso agora. A aparência de aviso oficial e a pressa podem fazer um golpe passar por verdadeiro.',
    projectDescription:
      'O EscudOld foi pensado para dar às pessoas idosas mais autonomia para tirar essa dúvida antes de agir, em uma conversa pelo WhatsApp.',
    howTitle: 'Como o EscudOld ajudaria',
    sendTitle: 'Envie o que recebeu',
    sendDescription: 'Compartilhe um print, áudio, vídeo, link ou mensagem. Você também pode contar o que apareceu no celular.',
    reviewTitle: 'Entenda os sinais',
    reviewDescription: 'A IA procuraria sinais de golpe, como pressão ou promessas suspeitas, e consultaria fontes confiáveis quando fosse possível verificar a informação.',
    decideTitle: 'Saiba como agir',
    decideDescription: 'Você receberia uma explicação simples. Se o risco fosse alto, o EscudOld orientaria você a não agir. Se quisesse, você poderia compartilhar a análise com alguém de confiança.',
    exampleTitle: 'Uma conversa antes de clicar',
    exampleDescription: 'Veja como seria a orientação diante de um aviso de armazenamento cheio.',
    exampleLabel: 'Exemplo fictício',
    demoYou: 'Você',
    demoMessage: 'Apareceu um anúncio dizendo que meu e-mail está sem espaço. Ele pede para eu pagar agora. O que eu faço?',
    demoRisk: 'Possível golpe',
    demoAnswer: 'O pedido de pagamento urgente em um anúncio é um sinal de alerta. Evite clicar, pagar ou passar seus dados. Abra seu aplicativo de e-mail e confira o armazenamento por lá.',
  },
  en: {
    navigation: 'Main navigation',
    whoWeAre: 'Who we are',
    aboutProject: 'About the project',
    themeLight: 'Use light theme',
    themeDark: 'Use dark theme',
    skip: 'Skip to content',
    project: 'The project',
    how: 'How it works',
    example: 'See an example',
    backToTop: 'Back to top',
    pageTitle: 'EscudOld | Ask EscudOld before you click',
    titleFirst: 'Before you click,',
    titleSecond: 'ask EscudOld.',
    description:
      'EscudOld proposes using AI on WhatsApp to help older adults spot potential online scams.',
    discover: 'Explore the project',
    phoneImage: 'WhatsApp conversation',
    phoneImageDescription: 'Screenshot of a conversation in which someone sends a suspicious alert and gets an explanation from EscudOld.',
    previewMessage: '“Your email storage is full. Pay now to keep using your account.”',
    previewLabel: 'Example suspicious message',
    previewFamilyMessage: '“Mum, this is my new number. I urgently need you to send money!”',
    previewBankMessage: '“Your account will be blocked! Update your details at this link.”',
    previewPrizeMessage: '“You won a prize! Pay the fee to claim it.”',
    previewDeliveryMessage: '“Your parcel is on hold. Pay the fee to release the delivery.”',
    previewCodeMessage: '“Send me the six-digit code that just arrived on your phone.”',
    problemTitle: 'An alert can look official.',
    problemDescription:
      'An ad says your email storage is full and tells you to act now. An official-looking alert and a sense of urgency can make a scam seem real.',
    projectDescription:
      'EscudOld is designed to give older adults a way to check for themselves before acting, in a conversation on WhatsApp.',
    howTitle: 'How EscudOld would help',
    sendTitle: 'Send what you received',
    sendDescription: 'Share a screenshot, voice message, video, link or text. You can also describe what you saw on your phone.',
    reviewTitle: 'Understand the signs',
    reviewDescription: 'AI would look for signs of a scam, such as pressure or suspicious promises, and consult trusted sources when the information could be verified.',
    decideTitle: 'Know what to do',
    decideDescription: 'You would get a plain-language explanation. If the risk were high, EscudOld would suggest holding off and give you the option to share the assessment with someone you trust.',
    exampleTitle: 'A conversation before you click',
    exampleDescription: 'See how EscudOld might respond to an alert about running out of storage.',
    exampleLabel: 'Fictional example',
    demoYou: 'You',
    demoMessage: 'An ad said my email storage was full. It says I need to pay now. What should I do?',
    demoRisk: 'Possible scam',
    demoAnswer: 'An urgent request for payment in an ad is a warning sign. Avoid clicking, paying or sharing your details. Open your email app and check your storage there.',
  },
} as const;

export type Locale = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)['pt-br'];

export const locales = Object.keys(ui) as Locale[];

export function getLocaleFromUrl(url: URL): Locale {
  const firstSegment = url.pathname.split('/')[1]?.toLowerCase();
  return firstSegment === 'en' ? 'en' : 'pt-br';
}

export function useTranslations(locale: Locale) {
  return (key: TranslationKey) => ui[locale][key];
}
