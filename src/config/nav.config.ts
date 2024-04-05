export type ChildrenType = {
  children?: BigChildrenType[];
  title: string;
  icon?: string;
  path: string;
};

export type BigChildrenType = {
  description: string;
  title: string;
  icon: string;
  path: string;
};

export type NavigationType = {
  children: ChildrenType[] | null;
  dropdown: boolean;
  title: string;
  path: string;
  big: boolean;
};

export const Navigation: NavigationType[] = [
  {
    title: 'Ana Sayfa',
    dropdown: false,
    children: null,
    big: false,
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
    dropdown: true,
    big: false
  },
  {
    children: [
      {
        children: [
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          }
        ],
        title: 'Bulut Çözümleri',
        path: '',
        icon: ''
      },
      {
        children: [
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          },
          {
            description:
              'Fiziksel müdahaleye gerek kalmadan ağı programlama ve yönetme imkanı sunar, bu sayede operasyonları basit hale getirip işletme verimliliğinizi artırırız.',
            icon: '/assets/network.png',
            title: 'Ağ Sanallaştırma',
            path: '/ag-sanallastirma'
          }
        ],
        title: 'Sanallaştırma Çözümleri',
        path: '',
        icon: ''
      },
      {
        children: [
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          }
        ],
        title: 'Deneme bir title',
        path: '',
        icon: ''
      },
      {
        children: [
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          },
          {
            description:
              'Dijital çağın hızlı dünyasında veri aktarımının kritik önemini bilerek, performanslı, hızlı ve güvenli ağ çözümleri sunuyoruz.',
            icon: '/assets/cloud.png',
            title: 'Bulut Yönetimi',
            path: '/bulut-yonetimi'
          }
        ],
        title: 'Menemen bir title',
        path: '',
        icon: ''
      }
    ],
    title: 'Hizmetler',
    path: '/hizmetler',
    dropdown: true,
    big: true
  },
  {
    title: 'Projeler',
    path: '/projeler',
    dropdown: false,
    children: null,
    big: false
  },
  {
    dropdown: false,
    children: null,
    title: 'Blog',
    path: '/blog',
    big: false
  },
  {
    path: '/iletisim',
    title: 'İletişim',
    dropdown: false,
    children: null,
    big: false
  }
];
