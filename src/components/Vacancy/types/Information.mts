interface Information {
    vacancyKey: number,
    vacancyTitle: string,
    salaryTitle: string,
    responsibilities: {
        id: number,
        title: string
    }[],
    requirements: {
        id: number,
        title: string
    }[],
    conditions: {
        id: number,
        title: string
    }[],
    city: 'Томск' | string,
    workFormat: 'на объекте' | 'в офисе' | string,
    experience: '1–3 года' | 'от 1 года' | 'от 3-х лет' | string,
    employment: 'полный день' | string,
}

export type {Information}