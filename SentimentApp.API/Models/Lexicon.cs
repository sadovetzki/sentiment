using System;
using System.ComponentModel.DataAnnotations;

namespace SentimentApp.API.Models
{
    public class Lexicon
    {
        public int Id { get; set; }
        public string Word { get; set; }
        public double Grade { get; set; }

    }
}