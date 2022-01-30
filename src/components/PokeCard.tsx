
import { pokemonGeneralInfo } from "../types/pokemonGeneral";


const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {
    return (
        <>
            <p>
                {name.toUpperCase()}
            </p>
            <img className="w-40" src={image} alt='a pokemon'>
            </img>
        </>

    )


};


export default PokeCard