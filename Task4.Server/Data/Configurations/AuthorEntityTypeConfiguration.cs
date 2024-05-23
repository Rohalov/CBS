using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Task4.Server.Models.Entities;

namespace Task4.Server.Data.Configurations
{
    public class AuthorEntityTypeConfiguration : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder
               .ToTable("Authors");

            builder
                .HasKey(x => x.Id);

            builder
                .Property(x => x.Id)
                .IsRequired();

            builder
                .Property(x => x.Name)
                .HasMaxLength(150)
                .IsRequired();

            builder
                .Property(x => x.Surname)
                .HasMaxLength(150)
                .IsRequired();

            builder
                .Property(x => x.Patronymic)
                .HasMaxLength(150);

            builder
                .Property(x => x.DateOfBirth)
                .IsRequired();

            builder
                .HasMany(x => x.Books)
                .WithOne(x => x.Author)
                .HasForeignKey(x => x.AuthorId)
                .IsRequired();
        }
    }
}
