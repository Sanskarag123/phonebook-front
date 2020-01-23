import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupshowComponent } from './groupshow.component';

describe('GroupshowComponent', () => {
  let component: GroupshowComponent;
  let fixture: ComponentFixture<GroupshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
