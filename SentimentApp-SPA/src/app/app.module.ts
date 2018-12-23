import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LexComponent } from './lex/lex.component';
import { LexService } from './_services/lex.service';
import { CalcService } from './_services/calc.service';
import { CalculateComponent } from './calculate/calculate.component';
import { LexiconComponent } from './lexicon/lexicon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LexComponent,
    CalculateComponent,
    LexiconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [LexService, CalcService],
  bootstrap: [AppComponent]
})
export class AppModule {}
