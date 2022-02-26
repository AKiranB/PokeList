const getDescription = async (url: string) => {
    const data = await fetch(url);
    return data.json();
};
export default getDescription;