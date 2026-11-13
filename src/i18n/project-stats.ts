import type { Locale } from './ui';

export interface ProjectStatisticGroup {
  title: string;
  items: { label: string; value: string }[];
}

// Figures supplied for this page. Keep the population, period and attribution
// in each label; these indicators do not share a single research sample.
export const projectStats: Record<Locale, ProjectStatisticGroup[]> = {
  'pt-br': [
    {
      title: 'Golpes contra idosos — 2025',
      items: [
        { label: 'Tentativas de fraude contra idosos (1º semestre de 2025)', value: '837 mil' },
        { label: 'Denúncias de violência patrimonial contra idosos', value: '59.134' },
        { label: 'Denúncias de violência contra pessoas idosas', value: 'Mais de 180 mil' },
        { label: 'Idosos entrevistados que já sofreram golpes financeiros', value: '40%' },
        { label: 'Vítimas idosas que sofreram mais de um golpe', value: '40%' },
        { label: 'Vítimas idosas que perderam dinheiro', value: '80%' },
        { label: 'Vítimas com prejuízo superior a R$ 1 mil', value: 'Mais de 50%' },
        { label: 'Prejuízo médio por golpe entre vítimas idosas na pesquisa Silverguard', value: 'R$ 4.820' },
        { label: 'Prejuízo médio do golpe do falso conhecido', value: 'R$ 2.800' },
        { label: 'Prejuízo médio de idosos comparado ao de jovens de 18 a 24 anos', value: 'Cerca de 5 vezes maior' },
      ],
    },
    {
      title: 'WhatsApp e golpes digitais — 2025',
      items: [
        { label: 'Golpes contra idosos iniciados no WhatsApp', value: '46%' },
        { label: 'Golpes contra idosos iniciados em aplicativos de mensagens', value: '48,6%' },
        { label: 'Golpes contra idosos iniciados em redes sociais', value: '24,8%' },
        { label: 'Golpes contra idosos envolvendo um conhecido que pede dinheiro', value: '21%' },
        { label: 'Golpes do falso conhecido iniciados pelo WhatsApp, todas as idades', value: '95,3%' },
        { label: 'Vítimas com 60+ entre os casos de golpe do falso conhecido', value: '30,8%' },
        { label: 'Idosos entrevistados que recebem abordagens suspeitas diariamente', value: '51,06%' },
        { label: 'Idosos entrevistados que recebem abordagens suspeitas de três a cinco vezes por semana', value: '21,21%' },
        { label: 'Entrevistados que apresentam dificuldade ou inconsistência para reconhecer golpes', value: 'Cerca de 51%' },
        { label: 'Idosos entrevistados que já perderam dinheiro em golpes pelo celular', value: '34,13%' },
      ],
    },
    {
      title: 'Desinformação e inteligência artificial — 2025',
      items: [
        { label: 'Crescimento de conteúdos falsos produzidos com IA identificados pela Lupa entre 2024 e 2025', value: '308%' },
        { label: 'Conteúdos com IA identificados nas verificações da Lupa em 2024', value: '39' },
        { label: 'Conteúdos com IA identificados nas verificações da Lupa em 2025', value: '159' },
        { label: 'Participação de conteúdos produzidos com IA nas verificações da Lupa em 2025', value: 'Cerca de 25%' },
        { label: 'Conteúdos verificados com IA e viés ideológico', value: 'Cerca de 45%' },
        { label: 'Grupos públicos brasileiros de WhatsApp analisados em estudo sobre desinformação', value: 'Mais de 100 mil' },
        { label: 'Mensagens únicas identificadas nesse estudo, entre julho de 2024 e julho de 2025', value: '325 mil' },
        { label: 'Acurácia da ferramenta acadêmica Ada na classificação de notícias', value: 'Mais de 86%' },
      ],
    },
    {
      title: 'Acesso digital e prevenção — 2025',
      items: [
        { label: 'Pessoas com 60+ que utilizam a internet no Brasil', value: '54%' },
        { label: 'Idosos conectados que acessam a internet exclusivamente pelo celular', value: '81%' },
        { label: 'Pessoas com 60+ que não utilizam a internet', value: 'Cerca de 16 milhões' },
        { label: 'Idosos conectados que utilizaram IA generativa', value: '6%' },
        { label: 'Idosos entrevistados que receberam orientação antifraude de bancos', value: '36,57%' },
        { label: 'Idosos entrevistados que receberam orientação antifraude de familiares ou amigos', value: '43,81%' },
        { label: 'Entrevistados que evitam abrir links, mesmo enviados por familiares', value: '49%' },
        { label: 'Entrevistados que evitam cadastrar cartões em sites desconhecidos', value: '57%' },
      ],
    },
    {
      title: 'Impacto dos golpes — 2025',
      items: [
        { label: 'Vítimas idosas que relataram frustração', value: '29%' },
        { label: 'Vítimas idosas que relataram medo', value: '19%' },
        { label: 'Vítimas idosas que relataram ansiedade ou insônia', value: '16%' },
        { label: 'Vítimas idosas que relataram vergonha', value: '11%' },
      ],
    },
    {
      title: 'Cenário brasileiro geral — 2025',
      items: [
        { label: 'Estelionatos registrados no Brasil', value: '2.261.055' },
        { label: 'Média de estelionatos registrados por hora', value: '258' },
        { label: 'Crescimento dos registros de estelionato entre 2018 e 2025', value: '429,8%' },
        { label: 'Brasileiros com receio de sofrer fraude pela internet ou celular', value: '83,2%' },
        { label: 'Contas do WhatsApp vinculadas a centrais de golpes e banidas mundialmente no primeiro semestre', value: '6,8 milhões' },
        { label: 'Crescimento dos registros de estelionato digital no Pará entre 2023 e 2024', value: '149,3%' },
        { label: 'Solicitações de devolução de Pix pelo MED em 2024–2025', value: '17,9 milhões' },
        { label: 'Solicitações de devolução de Pix que resultaram em devolução efetiva em 2024–2025', value: 'Cerca de 13%' },
      ],
    },
    {
      title: 'Casos e soluções documentadas',
      items: [
        { label: 'Prejuízo em caso de golpe do falso parente em Goiás, setembro de 2025', value: 'Mais de R$ 3,5 mil' },
        { label: 'Prejuízo relatado em golpe de falsa comunicação bancária ao TCU', value: 'R$ 70 mil' },
        { label: 'Prejuízo relatado em fraude de suposto investimento ao TCU', value: 'R$ 23 mil' },
        { label: 'Pessoas idosas participantes de curso sobre notícias falsas e golpes em Niterói', value: '30' },
        { label: 'Vítimas que a Silverguard afirma ter apoiado desde 2023', value: 'Mais de 200 mil' },
        { label: 'Valores que a Silverguard afirma ter contribuído para recuperar desde 2023', value: 'Mais de R$ 25 milhões' },
      ],
    },
  ],
  en: [
    {
      title: 'Scams targeting older adults — 2025',
      items: [
        { label: 'Fraud attempts targeting older adults (first half of 2025)', value: '837 thousand' },
        { label: 'Reports of financial abuse against older adults', value: '59,134' },
        { label: 'Reports of violence against older adults', value: 'Over 180 thousand' },
        { label: 'Older respondents who have experienced financial scams', value: '40%' },
        { label: 'Older victims who experienced more than one scam', value: '40%' },
        { label: 'Older victims who lost money', value: '80%' },
        { label: 'Victims who lost more than R$ 1 thousand', value: 'Over 50%' },
        { label: 'Average loss per scam among older victims in the Silverguard survey', value: 'R$ 4,820' },
        { label: 'Average loss in scams impersonating an acquaintance', value: 'R$ 2,800' },
        { label: 'Average loss among older adults compared with people aged 18–24', value: 'About 5 times higher' },
      ],
    },
    {
      title: 'WhatsApp and digital scams — 2025',
      items: [
        { label: 'Scams targeting older adults that started on WhatsApp', value: '46%' },
        { label: 'Scams targeting older adults that started in messaging apps', value: '48.6%' },
        { label: 'Scams targeting older adults that started on social media', value: '24.8%' },
        { label: 'Scams targeting older adults involving an acquaintance asking for money', value: '21%' },
        { label: 'Acquaintance impersonation scams that started on WhatsApp, all ages', value: '95.3%' },
        { label: 'Victims aged 60+ among acquaintance impersonation scam cases', value: '30.8%' },
        { label: 'Older respondents who receive suspicious approaches daily', value: '51.06%' },
        { label: 'Older respondents who receive suspicious approaches three to five times a week', value: '21.21%' },
        { label: 'Respondents who show difficulty or inconsistency in recognizing scams', value: 'About 51%' },
        { label: 'Older respondents who have lost money in mobile phone scams', value: '34.13%' },
      ],
    },
    {
      title: 'Disinformation and artificial intelligence — 2025',
      items: [
        { label: 'Growth in false AI-generated content identified by Lupa between 2024 and 2025', value: '308%' },
        { label: 'AI content identified in Lupa’s fact-checks in 2024', value: '39' },
        { label: 'AI content identified in Lupa’s fact-checks in 2025', value: '159' },
        { label: 'Share of AI-generated content in Lupa’s fact-checks in 2025', value: 'About 25%' },
        { label: 'Fact-checked AI content with an ideological bias', value: 'About 45%' },
        { label: 'Public Brazilian WhatsApp groups analyzed in a disinformation study', value: 'Over 100 thousand' },
        { label: 'Unique messages identified in that study, from July 2024 to July 2025', value: '325 thousand' },
        { label: 'Accuracy of the academic tool Ada in classifying news', value: 'Over 86%' },
      ],
    },
    {
      title: 'Digital access and prevention — 2025',
      items: [
        { label: 'People aged 60+ who use the internet in Brazil', value: '54%' },
        { label: 'Connected older adults who access the internet exclusively by mobile phone', value: '81%' },
        { label: 'People aged 60+ who do not use the internet', value: 'About 16 million' },
        { label: 'Connected older adults who have used generative AI', value: '6%' },
        { label: 'Older respondents who received scam prevention guidance from banks', value: '36.57%' },
        { label: 'Older respondents who received scam prevention guidance from family or friends', value: '43.81%' },
        { label: 'Respondents who avoid opening links, even those sent by family', value: '49%' },
        { label: 'Respondents who avoid registering cards on unfamiliar websites', value: '57%' },
      ],
    },
    {
      title: 'The impact of scams — 2025',
      items: [
        { label: 'Older victims who reported frustration', value: '29%' },
        { label: 'Older victims who reported fear', value: '19%' },
        { label: 'Older victims who reported anxiety or insomnia', value: '16%' },
        { label: 'Older victims who reported shame', value: '11%' },
      ],
    },
    {
      title: 'The broader picture in Brazil — 2025',
      items: [
        { label: 'Fraud cases recorded in Brazil', value: '2,261,055' },
        { label: 'Average fraud cases recorded per hour', value: '258' },
        { label: 'Growth in recorded fraud cases between 2018 and 2025', value: '429.8%' },
        { label: 'Brazilians afraid of experiencing fraud online or by mobile phone', value: '83.2%' },
        { label: 'WhatsApp accounts linked to scam operations and banned worldwide in the first half of the year', value: '6.8 million' },
        { label: 'Growth in recorded digital fraud cases in Pará between 2023 and 2024', value: '149.3%' },
        { label: 'Pix refund requests through MED in 2024–2025', value: '17.9 million' },
        { label: 'Pix refund requests that resulted in an actual refund in 2024–2025', value: 'About 13%' },
      ],
    },
    {
      title: 'Documented cases and solutions',
      items: [
        { label: 'Loss in a relative impersonation scam in Goiás, September 2025', value: 'Over R$ 3.5 thousand' },
        { label: 'Loss reported to TCU in a fake bank communication scam', value: 'R$ 70 thousand' },
        { label: 'Loss reported to TCU in an alleged investment scam', value: 'R$ 23 thousand' },
        { label: 'Older participants in a course on fake news and scams in Niterói', value: '30' },
        { label: 'Victims Silverguard says it has supported since 2023', value: 'Over 200 thousand' },
        { label: 'Funds Silverguard says it has helped recover since 2023', value: 'Over R$ 25 million' },
      ],
    },
  ],
};
