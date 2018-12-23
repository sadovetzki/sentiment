using System.Collections.Generic;

namespace SentimentApp.API.Models
{
    public class LexCalculation
    {
        public string Text { get; set; } 
        public double AverageGrade { get; set; }
        public ICollection<Lexicon> FoundLexes { get; set; }

        public LexCalculation()
        {
            FoundLexes = new HashSet<Lexicon>();
        }
    }
}