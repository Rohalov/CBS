using Microsoft.EntityFrameworkCore;
using Task4.Server.Data;
using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;

namespace Task4.Server.Services
{
    public class AuthorService : IAuthorService
    {
        private ApplicationDbContext _context;

        public AuthorService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Author>> GetAllAuthors()
        {
            var authors = await _context.Authors.Include(x => x.Books).ToListAsync();
            return authors;
        }

        public async Task<Author> GetSingleAuthor(int id)
        {
            var author = await _context.Authors.FindAsync(id);
            if (author == null)
            {
                return null;
            }
            author = await _context.Authors.Where(x => x.Id == id).Include(x => x.Books).FirstOrDefaultAsync();
            return author;
        }

        public async Task<Author> AddAuthor(AuthorDTO newAuthor)
        {
            var author = new Author()
            {
                Name = newAuthor.Name,
                Surname = newAuthor.Surname,
                Patronymic = newAuthor.Patronymic,
                DateOfBirth = newAuthor.DateOfBirth,
                Books = new List<Book>()
            };
            await _context.Authors.AddAsync(author);
            await _context.SaveChangesAsync();
            return author;
        }

        public async Task<Author> UpdateAuthor(int id, AuthorDTO updatedAuthor)
        {
            var author = await _context.Authors.FindAsync(id);
            if (author == null)
            {
                return null;
            }
            author.Name = updatedAuthor.Name;
            author.Surname = updatedAuthor.Surname;
            author.Patronymic = updatedAuthor.Patronymic;
            author.DateOfBirth = updatedAuthor.DateOfBirth;
            await _context.SaveChangesAsync();
            return author;
        }

        public async Task<Author> DeleteAuthor(int id)
        {
            var author = await _context.Authors.FindAsync(id);
            if (author == null)
            {
                return null;
            }
            _context.Authors.Remove(author);
            await _context.SaveChangesAsync();
            return author;
        }
    }
}
