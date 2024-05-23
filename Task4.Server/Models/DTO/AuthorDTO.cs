using Task4.Server.Models.Entities;

namespace Task4.Server.Models.DTO
{
    public class AuthorDTO
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string? Patronymic { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
