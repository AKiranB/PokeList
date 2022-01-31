
import { pokemonGeneralInfo } from "../types/pokemonGeneral";

const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {
    return (
        <>
            <div className="p-10 rounded m-10 bg-gradient-to-r from-cyan-500 to-blue-500">
                <a href={`/${name}`}>
                    <p className="text-center">
                        {name.toUpperCase()}
                    </p>
                    <img className="w-40" src={image} alt='a pokemon'>
                    </img>
                </a>
            </div>
        </>

    )


};


export default PokeCard