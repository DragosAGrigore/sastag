import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearsalListComponent } from './rehearsal-list.component';

describe('RehearsalListComponent', () => {
  let component: RehearsalListComponent;
  let fixture: ComponentFixture<RehearsalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehearsalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RehearsalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
