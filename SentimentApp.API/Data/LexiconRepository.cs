using SentimentApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SentimentApp.API.Helpers;

namespace SentimentApp.API.Data
{
    public class LexiconRepository : ILexiconRepository
    {
        private readonly DataContext _dataContext;
        public LexiconRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Add<T>(T lexicon) where T : class
        {
            _dataContext.Add(lexicon);
        }

        public void Remove<T>(T entity) where T : class
        {
            _dataContext.Remove(entity);
        }

        public async Task<ICollection<Lexicon>> GetLexicons(FilterParams filterParams = null)
        {
            var lexicons = _dataContext.Lexicon.AsQueryable();

            if (filterParams != null)
            {
                switch (filterParams.Connotation?.ToUpper())
                {
                    case "NEGATIVE":
                        lexicons = lexicons.Where(lex => lex.Grade < 0);
                        break;

                    case "POSITIVE":
                        lexicons = lexicons.Where(lex => lex.Grade > 0);
                        break;
                }
            }

            return await lexicons.ToListAsync();
        }

        public async Task<bool> LexiconExists(string word)
        {
            var lex = await GetLex(word);

            return lex != null;
        }

        public async Task<bool> SaveAll()
        {
            return await _dataContext.SaveChangesAsync() > 0;
        }

        public async Task<Lexicon> GetLex(string word)
        {
            return await _dataContext.Lexicon.FirstOrDefaultAsync(l => l.Word
                .Equals(word, StringComparison.CurrentCultureIgnoreCase)
            );
        }

        public async Task<Lexicon> GetLex(int id)
        {
            return await _dataContext.Lexicon.FirstOrDefaultAsync(l => l.Id == id);
        }
    }
}