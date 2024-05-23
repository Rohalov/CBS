using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Task4.Server.Models.Entities;

namespace Task4.Server.Data.Configurations
{
    public class BookEntityTypeConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {

            builder
               .ToTable("Books");

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
                .Property(x => x.Pages)
                .IsRequired();

            builder
                .Property(x => x.Genre)
                .HasConversion<string>()
                .HasMaxLength(100)
                .IsRequired();;
        }
    }
}
