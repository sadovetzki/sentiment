import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lex } from '../_models/lex';

@Injectable({
  providedIn: 'root'
})
export class LexService {
  baseUrl = 'http://localhost:5000/api/lex/';

  constructor(private http: HttpClient) {}

  getLexicons(filterParams?): Observable<Lex[]> {
    let params = new HttpParams();

    if (filterParams != null) {
      params = params.append('connotation', filterParams.connotation);
    }

    return this.http.get<Lex[]>(this.baseUrl, { params });
  }

  deleteLex(word: string): Observable<Lex> {
    return this.http.delete<Lex>(this.baseUrl + word, {});
  }

  addLex(lex: Lex): Observable<Lex> {
    return this.http.post<Lex>(this.baseUrl, lex);
  }

  updateLex(lex: Lex): Observable<Lex> {
    return this.http.put<Lex>(this.baseUrl + lex.id, lex);
  }
}
