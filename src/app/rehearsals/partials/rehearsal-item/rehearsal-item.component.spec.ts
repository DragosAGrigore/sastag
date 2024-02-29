import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearsalItemComponent } from './rehearsal-item.component';

describe('RehearsalItemComponent', () => {
  let component: RehearsalItemComponent;
  let fixture: ComponentFixture<RehearsalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehearsalItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RehearsalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
