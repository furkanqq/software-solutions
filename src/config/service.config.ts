import { title } from 'process';

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

export const ServicesPage: OurServicesType[] = [
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    title: 'Brand Strategy & Art Direction',
    icon: '/assets/first.png',
    label: 'Product Design',
    more: true
  },
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    title: 'UX/UI Design & Website/App Design',
    icon: '/assets/second.png',
    label: 'Customs Services',
    more: true
  },
  {
    description:
      'Creating a higher spacing and how people move through a unique.',
    title: 'Typography & Video Production',
    label: 'Product Development',
    icon: '/assets/third.png',
    more: true
  }
];

export type ServiceType = {
  description: string;
  title: string;
  more: boolean;
  image: string;
  icon: string;
  id: string;
};

export const Service: ServiceType[] = [
  {
    description:
      'We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.',
    image: '/assets/uiux.jpeg',
    icon: '/assets/first.png',
    title: 'UI/UX Design',
    more: true,
    id: '01'
  },
  {
    description:
      'We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.',
    image: '/assets/branding.png',
    icon: '/assets/second.png',
    title: 'Branding',
    more: true,
    id: '02'
  },
  {
    description:
      'We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.',
    image: '/assets/development.png',
    icon: '/assets/third.png',
    title: 'Development',
    more: true,
    id: '03'
  },
  {
    description:
      'We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.',
    image: '/assets/marketing.png',
    icon: '/assets/first.png',
    title: 'Marketing',
    more: true,
    id: '04'
  }
];
