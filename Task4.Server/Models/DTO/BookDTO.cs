using Task4.Server.Models.Entities;

namespace Task4.Server.Models.DTO
{
    public class BookDTO
    {
        public string Name { get; set; }
        public int Pages { get; set; }
        public GenreEnum Genre { get; set; }
        public int AuthorId { get; set; }
    }
}
