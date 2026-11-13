import type { Locale } from './ui';

interface TeamMember {
  id: string;
  name: string;
  nickname?: string;
  photo?: string;
  photoPosition?: string;
  description: Record<Locale, string[]>;
  links: { label: string; href: string }[];
}

export const aboutContent = {
  'pt-br': {
    title: 'Sobre nós',
    pageTitle: 'Sobre nós | DOld',
    description: 'Conheça Pedro Henrique (Rick), Lidia e Emily, a equipe por trás do DOld.',
    introduction: 'Conheça quem está por trás do DOld. Tecnologia, criatividade e vontade de construir soluções que façam a diferença.',
    photoPlaceholder: 'Espaço para foto',
    photoOf: 'Foto de',
    profilesOf: 'Perfis de',
    website: 'Site',
    newTab: 'abre em nova aba',
  },
  en: {
    title: 'About us',
    pageTitle: 'About us | DOld',
    description: 'Meet Pedro Henrique (Rick), Lidia and Emily, the team behind DOld.',
    introduction: 'Meet the people behind DOld. Technology, creativity and a desire to build solutions that make a difference.',
    photoPlaceholder: 'Space for a photo',
    photoOf: 'Photo of',
    profilesOf: 'Profiles of',
    website: 'Website',
    newTab: 'opens in a new tab',
  },
} satisfies Record<Locale, Record<string, string>>;

export const teamMembers: TeamMember[] = [
  {
    id: 'pedro-henrique',
    name: 'Pedro Henrique',
    nickname: 'Rick',
    photo: 'Rick.jpg',
    description: {
      'pt-br': [
        'Sou um programador e desenvolvedor de software apaixonado por tecnologia, inovação e criação de soluções inteligentes. Tenho foco em desenvolvimento backend, sistemas de alto desempenho, arquitetura de software, inteligência artificial e desenvolvimento de jogos.',
        'Gosto de explorar novas tecnologias, criar ferramentas próprias e transformar ideias complexas em projetos funcionais, sempre priorizando eficiência, organização, escalabilidade e qualidade. Também tenho um perfil empreendedor, buscando desenvolver produtos digitais e soluções que resolvam problemas reais.',
        'Sou curioso, criativo, analítico e exigente com os detalhes, sempre procurando aprender, experimentar e superar desafios técnicos.',
      ],
      en: [
        'I am a programmer and software developer passionate about technology, innovation and creating intelligent solutions. I focus on backend development, high-performance systems, software architecture, artificial intelligence and game development.',
        'I enjoy exploring new technologies, building my own tools and turning complex ideas into working projects, always prioritizing efficiency, organization, scalability and quality. I also have an entrepreneurial mindset, seeking to develop digital products and solutions that solve real problems.',
        'I am curious, creative, analytical and attentive to detail, always looking to learn, experiment and overcome technical challenges.',
      ],
    },
    links: [
      { label: 'Site', href: 'https://yrickzc.github.io/PES_Ricks/' },
      { label: 'Instagram', href: 'https://www.instagram.com/yrick_c/' },
      { label: 'GitHub', href: 'https://github.com/yrickzc' },
    ],
  },
  {
    id: 'lidia',
    name: 'Lidia',
    photo: 'Lidia.jpeg',
    photoPosition: '20% 60%',
    description: {
      'pt-br': [
        'Estudante de Análise e Desenvolvimento de Sistemas, apaixonada por tecnologia e inovação. Atuando no desenvolvimento e planejamento de projetos, buscando transformar ideias em soluções criativas, acessíveis e com impacto social.',
      ],
      en: [
        'A Systems Analysis and Development student passionate about technology and innovation. Working on project development and planning, seeking to turn ideas into creative, accessible solutions with a social impact.',
      ],
    },
    links: [{ label: 'GitHub', href: 'https://github.com/lidiatapajos' }],
  },
  {
    id: 'emily',
    name: 'Emily',
    photo: 'Emliy.jpeg',
    photoPosition: '50% 35%',
    description: {
      'pt-br': [
        'Sou estudante de Análise e Desenvolvimento de Sistemas e encontrei na tecnologia uma forma de transformar ideias em projetos reais. Gosto de criar, experimentar e descobrir novas possibilidades através da programação.',
        'Tenho afinidade com desenvolvimento Front-end, mas estou sempre aberta a explorar novos caminhos e aprender algo diferente. Acredito que cada projeto é uma oportunidade de evoluir e construir algo que faça a diferença.',
      ],
      en: [
        'I am a Systems Analysis and Development student, and technology has given me a way to turn ideas into real projects. I enjoy creating, experimenting and discovering new possibilities through programming.',
        'I have an affinity for front-end development, but I am always open to exploring new paths and learning something different. I believe every project is an opportunity to grow and build something that makes a difference.',
      ],
    },
    links: [{ label: 'GitHub', href: 'https://github.com/sweetie-dev' }],
  },
];
