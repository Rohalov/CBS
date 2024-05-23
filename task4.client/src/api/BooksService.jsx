const BooksService = {
    async getBooks() {
        const responce = await fetch(`/api/Books`, {
            method: 'GET'
        })
        const data = await responce.json();
        console.log(data);
        return data;
    },

    async addBook(book) {
        const responce = await fetch('/api/Books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        const data = await responce.json();
        console.log(data);
    },

    async updateBook(id, book) {
        const responce = await fetch(`/api/Books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        const data = await responce.json();
        console.log(data);
    },

    async deleteBook(id) {
        const responce = await fetch(`/api/Books/${id}`, {
            method: 'DELETE'
        });
        const data = await responce.json();
        console.log(data);
    }
}

export default BooksService