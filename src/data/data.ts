
export interface ICard {
    id: string;
    title: string;
    description?: string;
    imagePath?: string;
    price?: number,
    currency?: string
}

export const cardData: ICard[] = [
    {
        id: '1',
        title: "MRD1-G",
        description: "Электронный блок дифференциальной защиты генератора (электродвигателя)",
        imagePath: "./src/assets/images/mrd1_0.png",
        price: 3000.00,
        currency: 'euro'
    },
    {
        id: '2',
        title: "MRD1-T",
        description: "Электронный блок дифференциальной защиты трансформатора",
        imagePath: "./src/assets/images/mrdt1_0.png"
    },
    {
        id: '3',
        title: "Agile P253",
        description: "Защита двигателя",
        imagePath: "./src/assets/images/P14_20TE_Front view_1.png"
    },
    {
        id: '4',
        title: "Agile P541",
        description: "Дифференциальная защита линии",
        imagePath: "./src/assets/images/P14x_40TE_Front view_1.png"
    }
];
