using Microsoft.AspNetCore.Mvc;
using Task4.Server.Models.DTO;
using Task4.Server.Models.Entities;
using Task4.Server.Services;

namespace Task4.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private IAuthorService _authorService;

        public AuthorsController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<List<Author>>> GetAllAuthors()
        {
            var authors = await _authorService.GetAllAuthors();
            if (authors == null)
            {
                return NotFound("Authors not found");
            }
            return Ok(authors);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Author>> GetSingleAuthor([FromRoute] int id)
        {
            var author = await _authorService.GetSingleAuthor(id);
            if (author == null)
            {
                return NotFound("Author does not exist");
            }
            return Ok(author);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<Author>> AddAuthor([FromBody] AuthorDTO newAuthor)
        {
            var author = await _authorService.AddAuthor(newAuthor);
            return Created($"~api/entryfactors/{author.Id}", author);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Author>> UpdateAuthor([FromRoute] int id, [FromBody] AuthorDTO updatedAuthor)
        {
            var author = await _authorService.UpdateAuthor(id, updatedAuthor);
            if (author == null)
            {
                return NotFound("Author does not exist");
            }
            return Ok(author);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteEntryFactor([FromRoute] int id)
        {
            var author = await _authorService.DeleteAuthor(id);
            if (author == null)
            {
                return NotFound("Author does not exist");
            }
            return Ok(author);
        }
    }
}
