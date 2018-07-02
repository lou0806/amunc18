import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceLogComponent } from './conference-log.component';

describe('ConferenceLogComponent', () => {
  let component: ConferenceLogComponent;
  let fixture: ComponentFixture<ConferenceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
