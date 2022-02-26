import { useAppSelector } from "../app/hooks";
import TiledContainer from "../components/layout/TiledContainer";
import PokeCard from "../components/PokeCard";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";


const FavouritesList = () => {

    const favoritedPokemon = useAppSelector((state: any) => state.pokemon.pokemon);


    return (
        <TiledContainer>
            {favoritedPokemon.length > 0 && favoritedPokemon.map((pokemon: pokemonGeneralInfo, i: number) => {
                return <PokeCard
                    key={i}
                    {...pokemon}
                />
            }
            )}
        </TiledContainer>

    );
};


export default FavouritesList;