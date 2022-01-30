
import { pokemonGeneralInfo } from "../types/pokemonGeneral";


const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {
    return (
        <>
            <a href={`/${name}`}>
                <p>
                    {name.toUpperCase()}
                </p>
                <img className="w-40" src={image} alt='a pokemon'>
                </img>
            </a>
        </>

    )


};


export default PokeCard