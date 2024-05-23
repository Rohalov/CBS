using Microsoft.EntityFrameworkCore;
using Task4.Server.Data;
using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;

namespace Task4.Server.Services
{
    public class BookService : IBookService
    {
        private ApplicationDbContext _context;

        public BookService(ApplicationDbContext context) 
        {
            _context = context;
        }

        public async Task<List<Book>> GetAllBooks()
        {
            var books = await _context.Books.ToListAsync();
            return books;
        }

        public async Task<Book> AddBook(BookDTO newBook)
        {
            var author = await _context.Authors.FindAsync(newBook.AuthorId);
            if (author == null)
            {
                return null;
            }
            var book = new Book() 
            {
                Name = newBook.Name,
                Pages = newBook.Pages,
                Genre = newBook.Genre,
                AuthorId = newBook.AuthorId,
                Author = author
            };
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Book> UpdateBook(int id, BookDTO updatedBook)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return null;
            }
            var author = await _context.Authors.FindAsync(updatedBook.AuthorId);
            if (author == null)
            {
                return null;
            }

            book.Name = updatedBook.Name;
            book.Pages = updatedBook.Pages;
            book.Genre = updatedBook.Genre;
            book.AuthorId = updatedBook.AuthorId;
            book.Author = author;
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Book> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if(book == null)
            {
                return null;
            }
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
            return book;
        }
    }
}
