import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

type props = {
    name: string
};

const Heading = ({ name }: props) => {

    const pokemonName = capitalizeFirstLetter(name);

    return (
        <>
            {pokemonName && <h3 className="font-medium 
            text-black leading-tight text-3xl mt-0 mb-10 ">{pokemonName}</h3>}
        </>
    )
};

export default Heading;