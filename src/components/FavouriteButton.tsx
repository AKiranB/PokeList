import { useState } from 'react'

type props = {
    isFavorited: boolean | undefined
};

const FavouriteButton = ({ isFavorited }: props) => {
    console.log('favorite button')
    console.log(isFavorited)
    const [Favorited, setFavorited] = useState(isFavorited)

    return ((isFavorited ? <button> true </button> : <button>false</button>))
}


export default FavouriteButton;