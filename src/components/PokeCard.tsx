
import { pokemonGeneralInfo } from "../types/pokemonGeneral";

const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {
    let pokemonName
    if (name) {
        pokemonName = `${name.slice(0, 1).toUpperCase()}${name.slice(1, name.length)}`
    };
    return (
        <>
            <div className="p-10 rounded m-10 bg-gradient-to-r from-cyan-500 to-blue-500">
                <a href={`/pokemon/${name}`}>
                    <p className="text-center">
                        {pokemonName}
                    </p>
                    <img className="w-40" src={image} alt='a pokemon'>
                    </img>
                </a>
            </div>
        </>

    )


};


export default PokeCard