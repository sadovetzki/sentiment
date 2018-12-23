import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LexCalculation } from '../_models/lexCalculation';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  baseUrl = 'http://localhost:5000/api/calc';

  constructor(private http: HttpClient) {}

  getSentimentGrade(text: string): Observable<LexCalculation> {
    return this.http.post<LexCalculation>(this.baseUrl, { text });
  }
}
