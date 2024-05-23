const AuthorsService = {
    async getAuthors() {
        const responce = await fetch(`/api/Authors`, {
            method: 'GET'
        })
        const data = await responce.json();
        console.log(data);
        return data;
    },

    async getSingleAuthor(id) {
        const responce = await fetch(`/api/Authors/${id}`, {
            method: 'GET'
        })
        const data = await responce.json();
        console.log(data);
        return data;
    },

    async addAuthor(author) {
        const responce = await fetch('/api/Authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
        const data = await responce.json();
        console.log(data);
    },

    async updateAuthors(id, author) {
        const responce = await fetch(`/api/Authors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
        const data = await responce.json();
        console.log(data);
    },

    async deleteAuthors(id) {
        const responce = await fetch(`/api/Authors/${id}`, {
            method: 'DELETE'
        });
        const data = await responce.json();
        console.log(data);
    }
}

export default AuthorsService