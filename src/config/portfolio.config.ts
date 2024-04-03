export type keyPhrasesType = {
  phrase: string;
};

export type PortfolioType = {
  keyPhrases: keyPhrasesType[] | null;
  description: string;
  details: boolean;
  label: string;
  title: string;
};

export const Portfolio: PortfolioType[] = [
  {
    keyPhrases: [
      {
        phrase: 'Make your business visible online.'
      },
      {
        phrase: 'Make your eCommerce business stand out.'
      },
      {
        phrase: 'Grow with your audience.'
      }
    ],
    description:
      'We craft premium designs for agencies and global brands around the globe.',
    title: 'Luxury Glassware.',
    label: '01. DIGITAL',
    details: true
  },
  {
    keyPhrases: [
      {
        phrase: 'Make your business visible online.'
      },
      {
        phrase: 'Make your eCommerce business stand out.'
      },
      {
        phrase: 'Grow with your audience.'
      }
    ],
    description:
      'We craft premium designs for agencies and global brands around the globe.',
    title: 'Brand Identity.',
    label: '02. MARKETING',
    details: true
  },
  {
    keyPhrases: [
      {
        phrase: 'Make your business visible online.'
      },
      {
        phrase: 'Make your eCommerce business stand out.'
      },
      {
        phrase: 'Grow with your audience.'
      }
    ],
    description:
      'We craft premium designs for agencies and global brands around the globe.',
    title: 'Roseville Pottery.',
    label: '03. DESIGN',
    details: true
  }
];
