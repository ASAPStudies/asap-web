import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeAnimateHeroComponent } from './fade-animate-hero.component';

describe('FadeAnimateHeroComponent', () => {
  let component: FadeAnimateHeroComponent;
  let fixture: ComponentFixture<FadeAnimateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeAnimateHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeAnimateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
