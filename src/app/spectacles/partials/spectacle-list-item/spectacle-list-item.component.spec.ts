import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectacleListItemComponent } from './spectacle-list-item.component';

describe('ShowListItemComponent', () => {
  let component: SpectacleListItemComponent;
  let fixture: ComponentFixture<SpectacleListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpectacleListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpectacleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
