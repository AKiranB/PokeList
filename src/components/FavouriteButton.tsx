import { useDispatch } from 'react-redux';

type props = {
    isFavorited: boolean | undefined
    pokemonName: string | undefined
};

const FavouriteButton = ({ isFavorited, pokemonName }: props) => {
    const dispatch = useDispatch();
    return ((isFavorited ?
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => dispatch({ type: 'REMOVE_POKEMON', payload: pokemonName }))}> Remove Favourite</button> : <button className=" hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => dispatch({ type: 'ADD_POKEMON', payload: pokemonName }))} > Favourite</button>))
}


export default FavouriteButton;