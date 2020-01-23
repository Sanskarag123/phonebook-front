import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntercontactComponent } from './entercontact.component';

describe('EntercontactComponent', () => {
  let component: EntercontactComponent;
  let fixture: ComponentFixture<EntercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
