import type { Locale } from './ui';

interface ProjectMetric {
  label: string;
  description: string;
  value: string | null;
  source: string | null;
  href: string | null;
  period: string | null;
}

interface ProjectEvidence {
  topic: string;
  description: string;
  publisher: string | null;
  href: string | null;
  publishedAt: string | null;
}

// Add confirmed campaign and prototype URLs here. Missing URLs stay non-interactive.
export const projectLinks: { figma: string | null; ia4good: string | null } = {
  figma: null,
  ia4good: null,
};

// No statistics or reporting sources have been supplied. Keep these slots explicit
// until each figure has a source, a period and a matching population group.
const ptMetrics: ProjectMetric[] = [
  { label: 'Ocorrências de golpes', description: 'Registros de golpes contra pessoas idosas no Brasil.', value: null, source: null, href: null, period: null },
  { label: 'Impacto financeiro', description: 'Prejuízos associados a fraudes contra esse público.', value: null, source: null, href: null, period: null },
  { label: 'Evolução dos casos', description: 'Comparação entre períodos com o mesmo recorte de pesquisa.', value: null, source: null, href: null, period: null },
  { label: 'Golpes mais recorrentes', description: 'Modalidades de fraude e canais usados para abordar pessoas idosas.', value: null, source: null, href: null, period: null },
];

const enMetrics: ProjectMetric[] = [
  { label: 'Reported scams', description: 'Records of scams targeting older adults in Brazil.', value: null, source: null, href: null, period: null },
  { label: 'Financial impact', description: 'Losses associated with fraud targeting this population.', value: null, source: null, href: null, period: null },
  { label: 'Changes over time', description: 'Comparison of periods using the same research scope.', value: null, source: null, href: null, period: null },
  { label: 'Most common scams', description: 'Types of fraud and channels used to approach older adults.', value: null, source: null, href: null, period: null },
];

const ptEvidence: ProjectEvidence[] = [
  { topic: 'Fraudes e pessoas idosas', description: 'Reportagem a selecionar sobre o impacto dos golpes na vida financeira e na confiança de pessoas idosas.', publisher: null, href: null, publishedAt: null },
  { topic: 'Quando a mensagem parece real', description: 'Reportagem a selecionar sobre falsas identidades, pedidos urgentes e manipulação em mensagens.', publisher: null, href: null, publishedAt: null },
  { topic: 'Tecnologia e novos golpes', description: 'Reportagem a selecionar sobre o uso de inteligência artificial em fraudes e os desafios da prevenção.', publisher: null, href: null, publishedAt: null },
];

const enEvidence: ProjectEvidence[] = [
  { topic: 'Fraud and older adults', description: 'Reporting to be selected on the impact of scams on older adults’ finances and confidence.', publisher: null, href: null, publishedAt: null },
  { topic: 'When a message looks real', description: 'Reporting to be selected on impersonation, urgent requests and manipulation in messages.', publisher: null, href: null, publishedAt: null },
  { topic: 'Technology and new scams', description: 'Reporting to be selected on the use of artificial intelligence in fraud and the challenges of prevention.', publisher: null, href: null, publishedAt: null },
];

const pt = {
  pageTitle: 'Sobre o projeto | EscudOld',
  description: 'Entenda a proposta do EscudOld, suas próximas etapas e como apoiar uma ideia de proteção digital para pessoas idosas.',
  common: { newTab: 'abre em nova aba', pendingLink: 'Link pendente' },
  info: {
    label: 'Sobre o projeto',
    title: ['Uma pausa pode proteger', 'uma história inteira.'],
    description: 'O EscudOld nasce de uma dúvida cotidiana: em quem confiar quando uma mensagem parece real? Nossa proposta é ajudar pessoas idosas a entender os sinais antes de clicar.',
    action: 'Entenda a proposta',
    secondaryAction: 'Quero apoiar',
    imageAlt: 'Pessoa idosa usando um celular.',
    imageCaption: 'Mais autonomia para perguntar. Mais clareza para decidir.',
    context: 'O problema que queremos enfrentar',
    contextTitle: 'Por trás de uma mensagem, existe uma vida real.',
    contextDescription: 'O ponto de partida foi uma experiência familiar: anúncios que pareciam avisos do Gmail e geravam dúvida sobre o que era confiável. O projeto propõe uma forma simples de pedir orientação nesse momento.',
    dataLabel: 'Um olhar para os dados',
    pendingValue: 'Em curadoria',
    pendingSource: 'Fonte e período pendentes',
    dataNote: 'Os indicadores abaixo aguardam fontes verificadas, período e recorte etário. Nenhum número foi estimado.',
    metrics: ptMetrics,
  },
  evidence: {
    label: 'Embasamento',
    title: ['Uma proposta precisa', 'de evidências.'],
    description: 'Este espaço reúne as notícias e reportagens que vão contextualizar o problema e orientar a solução.',
    pending: 'Reportagem em curadoria',
    pendingSource: 'Fonte ainda não adicionada',
    read: 'Ler reportagem',
    previous: 'Reportagem anterior',
    next: 'Próxima reportagem',
    carousel: 'Carrossel',
    position: 'Item {current} de {total}',
    note: 'Os temas abaixo são pautas para pesquisa. As reportagens e seus links ainda precisam ser selecionados e conferidos.',
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
    note: 'Esses recursos fazem parte da proposta. A IA pode errar e não garante que uma mensagem seja segura.',
  },
  roadmap: {
    label: 'Roadmap',
    title: ['Uma ideia com propósito.', 'Um caminho para construir.'],
    description: 'Etapas propostas para evoluir o conceito. Datas, entregas e testes com participantes ainda precisam ser definidos.',
    status: 'Etapa proposta',
    items: [
      { title: 'Ouvir e pesquisar', description: 'Conversar com pessoas idosas e familiares, reunir evidências e entender situações reais de dúvida.' },
      { title: 'Desenhar e prototipar', description: 'Explorar linguagem, acessibilidade e fluxos de conversa antes de desenvolver a solução.' },
      { title: 'Construir uma primeira versão', description: 'Avaliar a integração com WhatsApp e a análise de mensagens, com atenção à privacidade e aos limites da IA.' },
      { title: 'Testar e aprender', description: 'Planejar um piloto consentido para avaliar compreensão, utilidade e possíveis erros, ajustando a proposta com os participantes.' },
    ],
  },
  figma: {
    label: 'Figma',
    title: ['O cuidado também está', 'na experiência.'],
    description: 'Queremos uma conversa fácil de ler e entender. O protótipo ajudará a explorar essa experiência antes de ela se tornar um produto.',
    action: 'Explorar no Figma',
    pending: 'Link do Figma pendente',
    note: 'O endereço do protótipo ainda não foi adicionado.',
    previewLabel: 'Estudo de conversa · Ilustrativo',
    previewName: 'EscudOld',
    previewQuestion: 'Recebi uma cobrança por mensagem. Como posso conferir?',
    previewAnswer: 'Uma cobrança inesperada merece cuidado. Antes de pagar, confirme pelo aplicativo ou site oficial da empresa.',
    previewHint: 'Uma explicação clara. Um próximo passo compreensível.',
  },
  needs: {
    label: 'Necessidades',
    title: ['Uma boa ideia cresce', 'com mais gente.'],
    description: 'Há diferentes formas de contribuir para desenvolver esta proposta.',
    action: 'Conheça a equipe',
    items: [
      { title: 'Pesquisa e escuta', description: 'Ajudar a entender dúvidas, hábitos e necessidades de pessoas idosas, com participação voluntária.' },
      { title: 'Design acessível', description: 'Contribuir com linguagem simples, legibilidade e experiências que respeitem diferentes níveis de familiaridade digital.' },
      { title: 'Desenvolvimento', description: 'Colaborar na exploração técnica da IA, da integração com WhatsApp e da proteção de dados.' },
      { title: 'Avaliação e parcerias', description: 'Ajudar a definir como avaliar a proposta e aproximá-la de quem pode se beneficiar dela.' },
    ],
  },
  support: {
    label: 'Apoie no IA4Good',
    title: ['Ajude esta ideia a chegar', 'a quem precisa.'],
    description: 'Apoie o EscudOld no IA4Good e faça parte da construção de uma tecnologia pensada para a autonomia de pessoas idosas.',
    action: 'Apoiar no IA4Good',
    nextStep: 'Você será direcionado à página do projeto no IA4Good para conhecer as formas de apoio disponíveis.',
    pending: 'O link do projeto no IA4Good ainda não foi adicionado. O acesso ao apoio ficará disponível aqui.',
    backToTop: 'Voltar ao início',
  },
};

const en: typeof pt = {
  pageTitle: 'About the project | EscudOld',
  description: 'Discover the EscudOld proposal, its next steps and how to support an idea for older adults’ digital safety.',
  common: { newTab: 'opens in a new tab', pendingLink: 'Link pending' },
  info: {
    label: 'About the project',
    title: ['A pause can protect', 'a lifetime of stories.'],
    description: 'EscudOld starts with an everyday question: who can you trust when a message looks real? Our proposal is to help older adults understand the warning signs before clicking.',
    action: 'Understand the proposal',
    secondaryAction: 'I want to help',
    imageAlt: 'An older adult using a mobile phone.',
    imageCaption: 'More independence to ask. More clarity to decide.',
    context: 'The problem we want to address',
    contextTitle: 'Behind a message, there is a real life.',
    contextDescription: 'A family experience sparked the idea: ads that looked like Gmail alerts created uncertainty about what to trust. The project proposes a simple way to ask for guidance at that moment.',
    dataLabel: 'A closer look at the data',
    pendingValue: 'Being researched',
    pendingSource: 'Source and period pending',
    dataNote: 'The indicators below await verified sources, reporting periods and age groups. No figures have been estimated.',
    metrics: enMetrics,
  },
  evidence: {
    label: 'Evidence',
    title: ['A proposal needs', 'evidence.'],
    description: 'This space brings together the news and reporting that will put the problem in context and inform the solution.',
    pending: 'Reporting being researched',
    pendingSource: 'Source not yet added',
    read: 'Read the article',
    previous: 'Previous article',
    next: 'Next article',
    carousel: 'Carousel',
    position: 'Item {current} of {total}',
    note: 'The topics below are research areas. The articles and their links still need to be selected and checked.',
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
    note: 'These features are part of the proposal. AI can make mistakes and does not guarantee that a message is safe.',
  },
  roadmap: {
    label: 'Roadmap',
    title: ['An idea with purpose.', 'A path to build it.'],
    description: 'Proposed steps to develop the concept. Dates, deliverables and participant testing still need to be defined.',
    status: 'Proposed step',
    items: [
      { title: 'Listen and research', description: 'Talk to older adults and families, gather evidence and understand real situations of uncertainty.' },
      { title: 'Design and prototype', description: 'Explore language, accessibility and conversation flows before developing the solution.' },
      { title: 'Build a first version', description: 'Assess WhatsApp integration and message analysis, considering privacy and the limits of AI.' },
      { title: 'Test and learn', description: 'Plan a consent-based pilot to assess understanding, usefulness and possible errors, refining the proposal with participants.' },
    ],
  },
  figma: {
    label: 'Figma',
    title: ['Care is also part', 'of the experience.'],
    description: 'We want a conversation that is easy to read and understand. The prototype will help explore this experience before it becomes a product.',
    action: 'Explore in Figma',
    pending: 'Figma link pending',
    note: 'The prototype address has not been added yet.',
    previewLabel: 'Conversation study · Illustrative',
    previewName: 'EscudOld',
    previewQuestion: 'I received a payment request in a message. How can I check it?',
    previewAnswer: 'An unexpected payment request calls for caution. Before paying, check through the company’s official app or website.',
    previewHint: 'A clear explanation. An understandable next step.',
  },
  needs: {
    label: 'What we need',
    title: ['A good idea grows', 'with more people.'],
    description: 'There are different ways to help develop this proposal.',
    action: 'Meet the team',
    items: [
      { title: 'Research and listening', description: 'Help understand older adults’ questions, habits and needs through voluntary participation.' },
      { title: 'Accessible design', description: 'Contribute plain language, readability and experiences that respect different levels of digital familiarity.' },
      { title: 'Development', description: 'Collaborate on exploring AI, WhatsApp integration and data protection.' },
      { title: 'Evaluation and partnerships', description: 'Help define how to evaluate the proposal and connect it with people who could benefit from it.' },
    ],
  },
  support: {
    label: 'Support us on IA4Good',
    title: ['Help this idea reach', 'the people who need it.'],
    description: 'Support EscudOld on IA4Good and help build technology designed for older adults’ independence.',
    action: 'Support on IA4Good',
    nextStep: 'You will be taken to the project’s IA4Good page to explore the available ways to support it.',
    pending: 'The project’s IA4Good link has not been added yet. Access to support will be available here.',
    backToTop: 'Back to top',
  },
};

export type ProjectContent = typeof pt;
export const projectContent: Record<Locale, ProjectContent> = { 'pt-br': pt, en };
