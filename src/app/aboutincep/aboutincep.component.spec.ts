import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutincepComponent } from './aboutincep.component';

describe('AboutincepComponent', () => {
  let component: AboutincepComponent;
  let fixture: ComponentFixture<AboutincepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutincepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutincepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
