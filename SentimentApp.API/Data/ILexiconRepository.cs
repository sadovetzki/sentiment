using System.Collections.Generic;
using System.Threading.Tasks;
using SentimentApp.API.Helpers;
using SentimentApp.API.Models;

namespace SentimentApp.API.Data
{
    public interface ILexiconRepository
    {
        Task<ICollection<Lexicon>> GetLexicons(FilterParams filterParams = null);
        Task<Lexicon> GetLex(string word);
        Task<Lexicon> GetLex(int id);
        void Add<T>(T entity) where T : class;
        void Remove<T>(T entity) where T : class;
        Task<bool> LexiconExists(string word);
        Task<bool> SaveAll();
    }
}