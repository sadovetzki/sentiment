using Newtonsoft.Json;
using SentimentApp.API.Models;
using System.Collections.Generic;
using System.IO;

namespace SentimentApp.API.Data
{
    public class Seed
    {
        private readonly ILexiconRepository _repository;
        public Seed(ILexiconRepository repository)
        {
            _repository = repository;
        }

        public void SeedData()
        {
            var initialData = File.ReadAllText("Data/seed.json");
            var lexicon = JsonConvert.DeserializeObject<List<Lexicon>>(initialData);

            foreach (var lex in lexicon)
            {
                _repository.Add(lex);
            }

            _repository.SaveAll();
        }
    }
}