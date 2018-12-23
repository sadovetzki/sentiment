/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LexComponent } from './lex.component';

describe('LexComponent', () => {
  let component: LexComponent;
  let fixture: ComponentFixture<LexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
