export type ChildrenType = {
  title: string;
  path: string;
};

export type NavigationType = {
  children: ChildrenType[] | null;
  dropdown: boolean;
  title: string;
  path: string;
};

export const Navigation: NavigationType[] = [
  {
    title: 'Ana Sayfa',
    dropdown: false,
    children: null,
    path: '/'
  },
  {
    children: [
      {
        title: 'Hakkımızda',
        path: '/hakkimizda'
      },
      {
        title: 'Ekibimiz',
        path: '/ekibimiz'
      },
      {
        title: 'Kariyer',
        path: '/kariyer'
      }
    ],
    title: 'Kurumsal',
    path: '/kurumsal',
    dropdown: true
  },
  {
    title: 'Hizmetler',
    path: '/hizmetler',
    dropdown: false,
    children: null
  },
  {
    title: 'Projeler',
    path: '/projeler',
    dropdown: false,
    children: null
  },
  {
    dropdown: false,
    children: null,
    title: 'Blog',
    path: '/blog'
  },
  {
    path: '/iletisim',
    title: 'İletişim',
    dropdown: false,
    children: null
  }
];
