import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtpcrComponent } from './rtpcr.component';

describe('RtpcrComponent', () => {
  let component: RtpcrComponent;
  let fixture: ComponentFixture<RtpcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtpcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtpcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
