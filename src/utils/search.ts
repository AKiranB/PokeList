import { pokemonGeneralInfo } from "../types/pokemonGeneral";


const search = (data: pokemonGeneralInfo[], searchString: string) => {
    const result: pokemonGeneralInfo[] | undefined = [];

    if (searchString === '') {
        return [...data]
    }
    data.forEach(item => {
        if (item.name.includes(searchString)) {
            return result.push(item)
        }
    })
    return result
};

export default search;