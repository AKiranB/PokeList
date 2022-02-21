import { useDispatch } from 'react-redux';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import { TiTick } from 'react-icons/ti'

type props = {
    pokemon: pokemonGeneralInfo,
    isFavorited: boolean | undefined
};

const FavouriteButton = ({ ...props }: props) => {
    const dispatch = useDispatch();
    return ((props.isFavorited ?
        <div className='flex w-64 items-center justify-center'>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => dispatch({ type: 'REMOVE_POKEMON', payload: props.pokemon.name }))}>Favourite</button>
            <TiTick />
        </div>
        :
        <>
            <div className='flex w-64 items-center justify-center '>
                <button className="text-center hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => dispatch({ type: 'ADD_POKEMON', payload: props.pokemon }))} > Favourite </button>

            </div>

        </>))

};


export default FavouriteButton;