import type { Locale } from './ui';

interface ProjectEvidence {
  topic: string;
  description: string;
  publisher: string;
  href: string;
  publishedAt: string;
  publishedLabel: string;
  image: string;
}

// Add confirmed campaign and prototype URLs here. Missing URLs stay non-interactive.
export const projectLinks: { figma: string | null; ia4good: string | null } = {
  figma: 'https://www.figma.com/design/drj1KiodD1iECtwcq1EHgl/Fluxo---Prot%C3%B3tipo-Escudo-60-?node-id=0-1&p=f',
  ia4good: null,
};

export const projectCurrentStage = 'prototipo';

const evidenceSources = {
  serasa: {
    publisher: 'Serasa',
    href: 'https://www.serasa.com.br/imprensa/denunciar-fraudes-idosos-serasa/',
    publishedAt: '2025-12',
    image: 'https://images.openai.com/static-rsc-4/TNww-Dt0TLtSY0TeCFe5qXSusKD6P2BLjgKpjSKQF--4mjT_F3uoIyMMQsviz_N9MfBwGZE5ND5MqEgcxAyIYFCySoS4sh1dG17KeiTcwyyhAevlGsKzU2Tm51kjFGB0MIqSi5Ce-vBi-ESGKuxsJZHFxQ2NCizN9MzkR7nRSpm6C90j_N2A6UiBTOCl5IYb?purpose=inline',
  },
  pcgo: {
    publisher: 'Polícia Civil de Goiás',
    href: 'https://goias.gov.br/policiacivil/pcgo-investiga-golpe-do-falso-parente-e-cumpre-mandado-de-busca/',
    publishedAt: '2025-09-08',
    image: 'https://images.openai.com/static-rsc-4/VqRNNBUzv_RMmnJY0L7L-AUmmtU4arCS0ZHF4rYfJpIFpT0xpd-tbLAoIxP5KNiCVKH_0An_L666K8k582ftnzbNKnsHR-CcZB9cUrsweSndxewXpf8mRnGSEM8TkgY_hckUYA47UM8_Xx4wkyx79ZZPf86BEwBGAdCAhl9w7pQ?purpose=inline',
  },
  cldf: {
    publisher: 'Câmara Legislativa do DF',
    href: 'https://www.cl.df.gov.br/web/guest/-/procuradoria-do-idoso-da-cldf-alerta-criminosos-inovam-em-golpes-contra-idosos',
    publishedAt: '2025-02-18',
    image: 'https://images.openai.com/static-rsc-4/ck2HkNQHrY98qfvdJWz36mMs6WbsJNtE5XbSspNAvfIWjQmCqRd5bF48HbPNDYVDINRosWrLmtKgvmkKrF6ya0x--txDnqAq3Jnq5v4_2LLh2WJMKJxmKO1EttN4-D3c1-Jqw3j3nR4CVDZKCY5udoz-Gi7lsxvNDzPUnH0Z1MM?purpose=inline',
  },
};

const ptEvidence: ProjectEvidence[] = [
  {
    ...evidenceSources.serasa,
    publishedLabel: 'Dezembro de 2025',
    topic: '4 em cada 10 idosos já foram vítimas de golpes financeiros',
    description: 'Pesquisa da Serasa e Silverguard revela que 40% dos idosos entrevistados já sofreram golpes financeiros. Entre as vítimas, 80% tiveram prejuízo monetário, além de impactos como medo, frustração e ansiedade.',
  },
  {
    ...evidenceSources.pcgo,
    publishedLabel: '08/09/2025',
    topic: 'Idosa perde mais de R$ 3,5 mil após mensagem de falsa filha',
    description: 'Uma criminosa se passou pela filha de uma idosa em um aplicativo de mensagens e solicitou ajuda financeira. A vítima acreditou na identidade falsa e realizou a transferência.',
  },
  {
    ...evidenceSources.cldf,
    publishedLabel: '18/02/2025',
    topic: 'Golpistas usam IA para imitar vozes de familiares e enganar idosos',
    description: 'A Procuradoria de Defesa da Pessoa Idosa alerta para golpes que utilizam inteligência artificial para reproduzir vozes familiares e solicitar dinheiro, tornando as fraudes mais difíceis de reconhecer.',
  },
];

const enEvidence: ProjectEvidence[] = [
  {
    ...evidenceSources.serasa,
    publishedLabel: 'December 2025',
    topic: '4 in 10 older adults have been victims of financial scams',
    description: 'A Serasa and Silverguard survey found that 40% of the older adults interviewed had experienced financial scams. Among the victims, 80% lost money and also reported effects such as fear, frustration and anxiety.',
  },
  {
    ...evidenceSources.pcgo,
    publishedLabel: '8 September 2025',
    topic: 'Older woman loses more than R$3,500 after a message from a fake daughter',
    description: 'A criminal posed as an older woman’s daughter on a messaging app and asked for financial help. The victim believed the false identity and transferred the money.',
  },
  {
    ...evidenceSources.cldf,
    publishedLabel: '18 February 2025',
    topic: 'Scammers use AI to imitate relatives’ voices and deceive older adults',
    description: 'The Office for the Defense of Older People warns about scams that use artificial intelligence to reproduce relatives’ voices and ask for money, making fraud harder to recognize.',
  },
];

const pt = {
  pageTitle: 'Sobre o projeto | DOld',
  description: 'Entenda a proposta do DOld, suas próximas etapas e como apoiar uma ideia de proteção digital para pessoas idosas.',
  common: { newTab: 'abre em nova aba' },
  info: {
    statsLabel: 'Dados sobre golpes e acesso digital',
    context: 'O problema que queremos enfrentar',
    contextTitle: 'Por trás de uma mensagem, existe uma vida real.',
    contextDescription: 'O projeto nasceu de uma experiência em família, quando anúncios que pareciam avisos do Gmail geraram dúvidas sobre o que era confiável. A partir disso, surgiu a ideia de oferecer uma forma simples de pedir orientação nessas situações.',
  },
  evidence: {
    label: 'Embasamento',
    title: ['Uma proposta precisa', 'de evidências.'],
    read: 'Ler notícia original',
    items: ptEvidence,
  },
  project: {
    label: 'O projeto',
    title: ['Alguém para perguntar.', 'Antes de confiar.'],
    description: 'A ideia é levar orientação para um lugar familiar: o WhatsApp. A pessoa poderia compartilhar o que recebeu e entender, em linguagem simples, por que aquilo merece cuidado.',
    status: 'Projeto em fase conceitual',
    items: [
      { title: 'Compartilhar a dúvida', description: 'Enviar uma mensagem, print, áudio, vídeo, link ou relato do que apareceu no celular.' },
      { title: 'Entender o alerta', description: 'A IA procuraria sinais de manipulação e consultaria fontes confiáveis quando fosse possível verificar a informação.' },
      { title: 'Decidir com mais clareza', description: 'Receber uma explicação simples e, se quiser, compartilhar a análise com alguém de confiança.' },
    ],
  },
  roadmap: {
    label: 'Roadmap',
    title: ['Da ideia à entrega.'],
    description: 'O caminho que queremos percorrer para transformar uma dúvida real em uma ferramenta simples de orientação.',
    navigation: 'Navegar pelas etapas do projeto',
    stage: 'Etapa',
    current: 'Etapa atual',
    outcome: 'Resultado esperado',
    mapLabel: 'Percurso de',
    items: [
      {
        id: 'ideia',
        title: 'Ideia e planejamento',
        description: 'Ouvir pessoas idosas e familiares, entender as situações de dúvida e definir onde o DOld pode ajudar.',
        outcome: 'Uma proposta clara, com público, problema e prioridades definidos.',
        stops: ['Escuta das pessoas', 'Pesquisa do problema', 'Definição da proposta', 'Escopo do projeto'],
      },
      {
        id: 'prototipo',
        title: 'Protótipo',
        description: 'Desenhar uma conversa fácil de entender e experimentar a experiência antes de começar o desenvolvimento.',
        outcome: 'Um protótipo navegável para testar os fluxos e ajustar a linguagem.',
        stops: ['Fluxos de conversa', 'Interface acessível', 'Protótipo navegável', 'Teste de uso'],
      },
      {
        id: 'mvp',
        title: 'MVP',
        description: 'Construir uma primeira versão para receber mensagens pelo WhatsApp e oferecer orientações com apoio de fontes confiáveis.',
        outcome: 'Uma versão funcional para experimentar com um grupo piloto.',
        stops: ['Entrada no WhatsApp', 'Análise da mensagem', 'Consulta a fontes', 'Orientação simples'],
      },
      {
        id: 'entrega',
        title: 'Entrega',
        description: 'Avaliar a experiência com participantes, aplicar os ajustes e preparar a solução para chegar a mais pessoas.',
        outcome: 'Uma solução pronta para disponibilizar, com orientação de uso e acompanhamento.',
        stops: ['Piloto com participantes', 'Ajustes da experiência', 'Entrega da solução', 'Escuta contínua'],
      },
    ],
  },
  figma: {
    label: 'Figma',
    title: ['O cuidado também está', 'na experiência.'],
    action: 'Ir para o Figma',
    pending: 'Link do Figma pendente',
    note: 'O endereço do protótipo ainda não foi adicionado.',
    previewLabel: 'Protótipo DOld',
    previewTitle: 'Prévia do protótipo DOld no Figma',
  },
  support: {
    label: 'Apoie no IA4Good',
    title: ['Ajude esta ideia a chegar', 'a quem precisa.'],
    description: 'Apoie o DOld no IA4Good e faça parte da construção de uma tecnologia pensada para a autonomia de pessoas idosas.',
    action: 'Apoiar no IA4Good',
    nextStep: 'Você será direcionado à página do projeto no IA4Good para conhecer as formas de apoio disponíveis.',
    backToTop: 'Voltar ao início',
  },
};

const en: typeof pt = {
  pageTitle: 'About the project | DOld',
  description: 'Discover the DOld proposal, its next steps and how to support an idea for older adults’ digital safety.',
  common: { newTab: 'opens in a new tab' },
  info: {
    statsLabel: 'Scam and digital access statistics',
    context: 'The problem we want to address',
    contextTitle: 'Behind a message, there is a real life.',
    contextDescription: 'The project grew out of a family experience with ads that looked like Gmail alerts and made it hard to know what to trust. That led to the idea of offering a simple way to ask for guidance in those moments.',
  },
  evidence: {
    label: 'Evidence',
    title: ['A proposal needs', 'evidence.'],
    read: 'Read the original article',
    items: enEvidence,
  },
  project: {
    label: 'The project',
    title: ['Someone to ask.', 'Before you trust.'],
    description: 'The idea is to bring guidance to a familiar place: WhatsApp. People could share what they received and understand, in plain language, why it deserves caution.',
    status: 'Concept-stage project',
    items: [
      { title: 'Share the question', description: 'Send a message, screenshot, voice message, video, link or description of what appeared on the phone.' },
      { title: 'Understand the warning', description: 'AI would look for signs of manipulation and consult trusted sources when information could be verified.' },
      { title: 'Decide with more clarity', description: 'Receive a simple explanation and, if desired, share the assessment with someone you trust.' },
    ],
  },
  roadmap: {
    label: 'Roadmap',
    title: ['From idea to delivery.'],
    description: 'The path we want to follow to turn a real question into a simple tool for guidance.',
    navigation: 'Navigate the project stages',
    stage: 'Stage',
    current: 'Current stage',
    outcome: 'Expected outcome',
    mapLabel: 'Route for',
    items: [
      {
        id: 'ideia',
        title: 'Idea and planning',
        description: 'Listen to older adults and families, understand moments of uncertainty and define where DOld can help.',
        outcome: 'A clear proposal with a defined audience, problem and priorities.',
        stops: ['Listening to people', 'Problem research', 'Defining the proposal', 'Project scope'],
      },
      {
        id: 'prototipo',
        title: 'Prototype',
        description: 'Design an easy-to-understand conversation and explore the experience before development begins.',
        outcome: 'A clickable prototype to test the flows and refine the language.',
        stops: ['Conversation flows', 'Accessible interface', 'Clickable prototype', 'Usability testing'],
      },
      {
        id: 'mvp',
        title: 'MVP',
        description: 'Build a first version to receive messages through WhatsApp and offer guidance supported by reliable sources.',
        outcome: 'A working version to try with a pilot group.',
        stops: ['WhatsApp entry point', 'Message analysis', 'Source checking', 'Simple guidance'],
      },
      {
        id: 'entrega',
        title: 'Delivery',
        description: 'Evaluate the experience with participants, make adjustments and prepare the solution to reach more people.',
        outcome: 'A solution ready to release, with usage guidance and ongoing support.',
        stops: ['Participant pilot', 'Experience refinements', 'Solution delivery', 'Ongoing listening'],
      },
    ],
  },
  figma: {
    label: 'Figma',
    title: ['Care is also part', 'of the experience.'],
    action: 'Go to Figma',
    pending: 'Figma link pending',
    note: 'The prototype address has not been added yet.',
    previewLabel: 'DOld prototype',
    previewTitle: 'DOld prototype preview in Figma',
  },
  support: {
    label: 'Support us on IA4Good',
    title: ['Help this idea reach', 'the people who need it.'],
    description: 'Support DOld on IA4Good and help build technology designed for older adults’ independence.',
    action: 'Support on IA4Good',
    nextStep: 'You will be taken to the project’s IA4Good page to explore the available ways to support it.',
    backToTop: 'Back to top',
  },
};

export type ProjectContent = typeof pt;
export const projectContent: Record<Locale, ProjectContent> = { 'pt-br': pt, en };
