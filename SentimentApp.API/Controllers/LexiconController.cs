using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SentimentApp.API.Data;
using SentimentApp.API.Helpers;
using SentimentApp.API.Models;

namespace SentimentApp.API.Controllers
{


    [Route("api/lex")]
    [ApiController]
    public class LexiconController : ControllerBase
    {
        private const string UNABLE_TO_UPDATE_LEX = "Unable to update lex";
        private const string UNABLE_TO_ADD_LEX = "Unable to add lex";
        private const string UNABLE_TO_DELETE_LEX = "Unable to delete lex";
        private const string CANNOT_ADD_EXISTING_LEX = "Cannot add this lex, it's already exist";
        private const string LEX_WORD_CANNOT_BE_EMPTY = "Lex word cannot be empty";
        private const string LEX_DOESNT_EXIST = "This lex does not exist";

        private readonly ILexiconRepository _lexiconRepository;

        public LexiconController(ILexiconRepository lexiconRepository)
        {
            _lexiconRepository = lexiconRepository;
        }

        // GET api/lex
        [HttpGet]
        public async Task<IActionResult> GetWords([FromQuery]FilterParams filterParams = null)
        {
            var values = await _lexiconRepository.GetLexicons(filterParams);

            return Ok(values);
        }

        // POST api/lex
        [HttpPost]
        public async Task<IActionResult> AddLexicon([FromBody] Lexicon lex)
        {
            if (lex == null || string.IsNullOrEmpty(lex.Word))
            {
                return BadRequest(LEX_WORD_CANNOT_BE_EMPTY);
            }

            if (await _lexiconRepository.LexiconExists(lex.Word))
            {
                return BadRequest(CANNOT_ADD_EXISTING_LEX);
            }

            _lexiconRepository.Add(lex);

            if (await _lexiconRepository.SaveAll())
            {
                return Ok(lex);
            }

            return BadRequest(UNABLE_TO_ADD_LEX);
        }

        // DELETE api/lex/good
        [HttpDelete("{word}")]
        public async Task<IActionResult> Delete(string word)
        {
            var lex = await _lexiconRepository.GetLex(word);

            if (lex == null)
            {
                return BadRequest(LEX_DOESNT_EXIST);
            }

            _lexiconRepository.Remove(lex);

            if (await _lexiconRepository.SaveAll())
            {
                return Ok(lex);
            }

            return BadRequest(UNABLE_TO_DELETE_LEX);
        }

        // PUT api/lex/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Lexicon lex)
        {
            var lexFromRepo = await _lexiconRepository.GetLex(id);

            if (lexFromRepo == null)
            {
                return BadRequest(LEX_DOESNT_EXIST);
            }

            if (string.IsNullOrEmpty(lex.Word))
            {
                return BadRequest(LEX_WORD_CANNOT_BE_EMPTY);
            }

            var lexes = await _lexiconRepository.GetLexicons();
            lexes.Remove(lexFromRepo);

            if (lexes.Any(x => x.Word == lex.Word))
            {
                return BadRequest(CANNOT_ADD_EXISTING_LEX);
            }

            lexFromRepo.Word = lex.Word;
            lexFromRepo.Grade = lex.Grade;

            if (await _lexiconRepository.SaveAll())
                return Ok(lexFromRepo);

            return BadRequest(UNABLE_TO_UPDATE_LEX);
        }
    }
}
