using Microsoft.AspNetCore.Mvc;
using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;
using Task4.Server.Services;

namespace Task4.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Book>>> GetAllAuthors()
        {
            var books = await _bookService.GetAllBooks();
            if (books == null)
            {
                return NotFound("Books not found");
            }
            return Ok(books);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Book>> AddBook([FromBody] BookDTO newBook)
        {
            var book = await _bookService.AddBook(newBook);
            if (book == null)
            {
                return BadRequest("Author does not exist");
            }
            return Created($"~api/entryfactors/{book.Id}", book);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Book>> UpdateBook([FromRoute] int id, [FromBody] BookDTO updatedBook)
        {
            var book = await _bookService.UpdateBook(id, updatedBook);
            if (book == null)
            {
                return NotFound("Book or author not found");
            }
            return Ok(book);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteBook([FromRoute] int id)
        {
            var book = await _bookService.DeleteBook(id);
            if (book == null)
            {
                return NotFound("Book does not exist");
            }
            return Ok(book);
        }
    }
}
