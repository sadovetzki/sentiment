import { Component, OnInit } from '@angular/core';
import { LexService } from '../_services/lex.service';
import { Lex } from '../_models/lex';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.css']
})
export class LexiconComponent implements OnInit {
  lexicons: Lex[];
  lex: Lex;
  filterParams: any = {};
  newLexiconForm: FormGroup;

  constructor(private lexService: LexService) {}

  ngOnInit() {
    this.initForm();
    this.resetFilter();
  }

  initForm() {
    const defaultSentimentGrade = 0;
    const defaultSentimentWord = '';
    const minSentimentGrade = -1;
    const maxSentimentGrade = 1;
    this.newLexiconForm = new FormGroup({
      word: new FormControl(defaultSentimentWord, Validators.required),
      grade: new FormControl(defaultSentimentGrade, [
        Validators.required,
        Validators.min(minSentimentGrade),
        Validators.max(maxSentimentGrade)
      ])
    });
  }

  resetFilter() {
    this.filterParams.connotation = '';
    this.getLexicons();
  }

  getLexicons() {
    this.lexService.getLexicons(this.filterParams).subscribe(
      (response: Lex[]) => {
        this.lexicons = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  addLex() {
    if (this.newLexiconForm.valid) {
      this.lex = Object.assign({}, this.newLexiconForm.value);
      this.lexService.addLex(this.lex).subscribe(
        (lex: Lex) => {
          this.lexicons.push(lex);
          this.newLexiconForm.reset();
          this.initForm();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  updateLexList(lex: Lex) {
    this.lexicons.splice(this.lexicons.findIndex(l => l.id === lex.id), 1);
  }
}
