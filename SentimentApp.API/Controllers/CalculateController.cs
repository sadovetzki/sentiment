using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SentimentApp.API.Data;
using System.Linq;
using SentimentApp.API.Models;
using System;

namespace SentimentApp.API.Controllers
{
    [Route("api/calc")]
    [ApiController]
    public class CalculateController : ControllerBase
    {
        private readonly ILexiconRepository _lexiconRepository;

        public CalculateController(ILexiconRepository lexiconRepository)
        {
            _lexiconRepository = lexiconRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CalculateSentiment([FromBody]LexCalculation lexCalc)
        {
            var lexiconFromRepo = await _lexiconRepository.GetLexicons();

            string[] words = lexCalc.Text.Split(new char[] { ' ', ',', ';', '.', ':', '"' });
            double sentimentGrade = 0;

            foreach (var word in words)
            {
                var lex = lexiconFromRepo.FirstOrDefault(l => l.Word.Equals(word.TrimStart().TrimEnd(), StringComparison.InvariantCultureIgnoreCase));

                if (lex != null)
                {
                    sentimentGrade += lex.Grade;
                    lexCalc.FoundLexes.Add(lex);
                }
            }

            if (sentimentGrade != 0 && lexCalc.FoundLexes.Count() > 0)
            {
                lexCalc.AverageGrade = sentimentGrade / lexCalc.FoundLexes.Count();
            }

            return Ok(lexCalc);
        }
    }
}