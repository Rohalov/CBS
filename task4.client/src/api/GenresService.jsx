const GenresService = {
    async getGenres() {
        const responce = await fetch(`/api/Genres`, {
            method: 'GET'
        })
        const data = await responce.json();
        console.log(data);
        return data;
    }
}

export default GenresService