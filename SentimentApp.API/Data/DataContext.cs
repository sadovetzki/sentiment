using Microsoft.EntityFrameworkCore;
using SentimentApp.API.EntityConfigurations;
using SentimentApp.API.Models;

namespace SentimentApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Lexicon> Lexicon { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LexiconConfiguration());
        }
    }
}
