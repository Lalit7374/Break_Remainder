import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakSuggestionsComponent } from './break-suggestions.component';

describe('BreakSuggestionsComponent', () => {
  let component: BreakSuggestionsComponent;
  let fixture: ComponentFixture<BreakSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
