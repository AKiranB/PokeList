import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

type props = {
    name: string
};

const Heading = ({ name }: props) => {

    const pokemonName = capitalizeFirstLetter(name);

    return (
        <>
            {pokemonName && <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 ">{pokemonName}</h3>}
        </>
    )
};

export default Heading;