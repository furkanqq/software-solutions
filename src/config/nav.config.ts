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
    dropdown: false,
    children: null,
    title: 'Ana Sayfa',
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
        path: '/ekip'
      },
      {
        title: 'Basında Biz',
        path: '/basinda-biz'
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
    path: '/iletişim',
    title: 'İletişim',
    dropdown: false,
    children: null
  }
];
