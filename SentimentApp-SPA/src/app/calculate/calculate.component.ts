import { Component, OnInit } from '@angular/core';
import { CalcService } from '../_services/calc.service';
import { LexCalculation } from '../_models/lexCalculation';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  fileText: string;
  lexCalculation: LexCalculation;

  constructor(private calcService: CalcService) {
    this.lexCalculation = {
      text: '',
      averageGrade: 0,
      foundLexes: []
    };
  }

  ngOnInit() {}

  fileUpload(files: FileList) {
    const reader = new FileReader();
    if (files[0].type === 'text/plain') {
      reader.readAsText(files[0]);
      reader.onload = () => {
        this.lexCalculation.text = reader.result.toString();
        if (this.lexCalculation.text) {
          this.parse();
        }
      };
    }
  }

  parse() {
    this.calcService.getSentimentGrade(this.lexCalculation.text).subscribe(
      (response: LexCalculation) => {
        console.log(response);
        this.lexCalculation = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
