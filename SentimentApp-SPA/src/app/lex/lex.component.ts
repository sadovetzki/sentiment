import {
  Component,
  OnInit,
  ViewChild,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { LexService } from '../_services/lex.service';
import { Lex } from '../_models/lex';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lex',
  templateUrl: './lex.component.html',
  styleUrls: ['./lex.component.css']
})
export class LexComponent implements OnInit {
  // @ViewChild('editForm') editForm: NgForm;
  @Input() lex: Lex;
  @Output() removeLexEvent = new EventEmitter<Lex>();
  lexForEdit: Lex;
  editLexiconForm: FormGroup;

  constructor(private lexService: LexService) {}

  ngOnInit() {}

  initForm() {
    const minSentimentGrade = -1;
    const maxSentimentGrade = 1;
    this.editLexiconForm = new FormGroup({
      word: new FormControl(this.lexForEdit.word, Validators.required),
      grade: new FormControl(this.lexForEdit.grade, [
        Validators.required,
        Validators.min(minSentimentGrade),
        Validators.max(maxSentimentGrade)
      ])
    });
  }

  opacity() {
    if (this.lex.grade === 0) {
      return 1;
    }
    return Math.pow(Math.abs(this.lex.grade), 0.4);
  }

  delete() {
    this.lexService.deleteLex(this.lex.word).subscribe(
      response => {
        this.removeLexEvent.emit(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  setLexForEdit() {
    if (this.lexForEdit) {
      this.lexForEdit = null;
    } else {
      this.lexForEdit = {
        id: this.lex.id,
        word: this.lex.word,
        grade: this.lex.grade
      };
      this.initForm();
    }
  }

  applyEdit() {
    if (this.editLexiconForm.valid) {
      this.lexForEdit = Object.assign({}, this.editLexiconForm.value);
      this.lexForEdit.id = this.lex.id;
      this.lexService.updateLex(this.lexForEdit).subscribe(
        lex => {
          if (lex) {
            this.lexForEdit = null;
            this.lex = lex;
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
