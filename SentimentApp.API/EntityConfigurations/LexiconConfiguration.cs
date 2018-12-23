using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SentimentApp.API.Models;

namespace SentimentApp.API.EntityConfigurations
{
    public class LexiconConfiguration : IEntityTypeConfiguration<Lexicon>
    {
        public void Configure(EntityTypeBuilder<Lexicon> builder)
        {
            builder
                .Property(lex => lex.Word)
                .IsRequired();

            builder
                .HasIndex(lex => lex.Word)
                .IsUnique();
        }
    }
}