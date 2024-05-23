using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;

namespace Task4.Server.Services
{
    public interface IAuthorService
    {
        Task<List<Author>> GetAllAuthors();
        Task<Author> GetSingleAuthor(int id);
        Task<Author> AddAuthor(AuthorDTO newAuthor);
        Task<Author> UpdateAuthor(int id, AuthorDTO updatedAuthor);
        Task<Author> DeleteAuthor(int id);
    }
}
