interface LinkInfo {
    id: number,
    type: 'anchor' | 'route',
    title: string,
    page: string,
    href: string,
}

export type {LinkInfo}