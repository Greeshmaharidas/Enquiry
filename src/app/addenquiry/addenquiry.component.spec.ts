import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnquiryComponent } from './addenquiry.component';

describe('AddenquiryComponent', () => {
  let component: AddEnquiryComponent;
  let fixture: ComponentFixture<AddEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
