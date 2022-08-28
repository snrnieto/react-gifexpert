export const getGifs = async (category) => {
    const apiKey = 'Ppjz4a6crGIr6ajZO6SF29pjC8DIOXMl';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const resp = await fetch(url)
    const { data } = await resp.json();
    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    ))
    console.log(gifs);
    return gifs;
}