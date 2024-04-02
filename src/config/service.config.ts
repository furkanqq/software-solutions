export type OurServicesType = {
  description: string;
  more: boolean;
  label: string;
  title: string;
  icon: string;
};

export const OurServices: OurServicesType[] = [
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    title: 'Digital Product Design',
    icon: '/assets/first.png',
    label: 'Product Design',
    more: true
  },
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    title: 'Branding & Design',
    icon: '/assets/second.png',
    label: 'Customs Services',
    more: true
  },
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    label: 'Product Development',
    icon: '/assets/third.png',
    title: 'Web Development',
    more: true
  }
];
