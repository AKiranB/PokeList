export type pokemonDetails = {
    __typename: string,
    name: string,
    height: number,
    weight: number,
    sprites: {
        __typename: string,
        back_shiny: string,
        front_default: string,
        back_default: string,
        front_shiny: string,
    },
    stats: object[],
    abilities: abilities[],
    abilityInformation: abilityInformation[]
};

type abilityInformation = {
    name: string,
    description: string
}

export type abilities = {
    __typename: string,
    ability: {
        name: string,
        url: string
        description?: string
    }
};


