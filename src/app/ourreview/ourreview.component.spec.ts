import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurreviewComponent } from './ourreview.component';

describe('OurreviewComponent', () => {
  let component: OurreviewComponent;
  let fixture: ComponentFixture<OurreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
