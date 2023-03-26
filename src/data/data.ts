import { STATE_GOOD } from '../constants/pages';

export interface ICard {
  id: string;
  title: string;
  description?: string;
  imagePath?: string;
  price?: number;
  currency?: string;
  state?: string;
}

export const cardData: ICard[] = [
  {
    id: '1',
    title: 'MRD1-G',
    description: 'Электронный блок дифференциальной защиты генератора (электродвигателя)',
    imagePath: './src/assets/images/mrd1_0.png',
    price: 3000.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
  {
    id: '2',
    title: 'MRD1-T',
    description: 'Электронный блок дифференциальной защиты трансформатора',
    imagePath: './src/assets/images/mrdt1_0.png',
    price: 500.0,
    currency: 'euro',
    state: STATE_GOOD.OLD,
  },
  {
    id: '3',
    title: 'Agile P253',
    description: 'Защита двигателя',
    imagePath: './src/assets/images/P14_20TE_Front view_1.png',
    price: 30300.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
  {
    id: '4',
    title: 'Agile P541',
    description: 'Дифференциальная защита линии',
    imagePath: './src/assets/images/P14x_40TE_Front view_1.png',
    price: 500.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
  {
    id: '5',
    title: 'PowerLogic PM8243',
    description: 'Многофункциональный измеритель электроэнергии и мощности',
    imagePath: './src/assets/images/METSEPM8243_Front view_1.png',
    price: 300.0,
    currency: 'euro',
    state: STATE_GOOD.OLD,
  },
  {
    id: '6',
    title: 'LSP2316',
    description: 'Многофункциональное устройство защиты с возможностью управления присоединением',
    imagePath: './src/assets/images/LSP2316.png',
    price: 1500.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
  {
    id: '7',
    title: 'SIPROTEC 4 7SJ61',
    description: 'Многофункциональное устройство защиты с возможностью управления присоединением\n',
    imagePath: './src/assets/images/A9Rfpfvew_14b3jl9_3bw.png',
    price: 3340.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
  {
    id: '8',
    title: 'SIPROTEC 4 7SJ62',
    description: 'Устройство управления присоединением высокого напряжения',
    imagePath: './src/assets/images/7sj46.jpg',
    price: 2300.0,
    currency: 'euro',
    state: STATE_GOOD.NEW,
  },
];
