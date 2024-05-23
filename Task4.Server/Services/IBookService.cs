using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;

namespace Task4.Server.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetAllBooks();
        Task<Book> AddBook(BookDTO newBook);
        Task<Book> UpdateBook(int id, BookDTO updatedBook);
        Task<Book> DeleteBook(int id);
    }
}
