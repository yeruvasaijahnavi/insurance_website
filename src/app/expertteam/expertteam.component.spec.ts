import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertteamComponent } from './expertteam.component';

describe('ExpertteamComponent', () => {
  let component: ExpertteamComponent;
  let fixture: ComponentFixture<ExpertteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
