const capitalizeFirstLetter = (name: string) => {
    const firstLetter = name.slice(0, 1).toUpperCase()
    return firstLetter + name.slice(1, name.length)
};

export default capitalizeFirstLetter;