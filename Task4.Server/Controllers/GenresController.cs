using Microsoft.AspNetCore.Mvc;
using Task4.Server.Models.Entities;

namespace Task4.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<List<string>> GetAllGenres()
        {
            var genres = Enum.GetNames(typeof(GenreEnum)).ToList();
            return Ok(genres);
        }
    }
}
