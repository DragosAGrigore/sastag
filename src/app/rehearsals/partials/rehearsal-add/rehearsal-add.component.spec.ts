import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearsalAddComponent } from './rehearsal-add.component';

describe('RehearsalAddComponent', () => {
  let component: RehearsalAddComponent;
  let fixture: ComponentFixture<RehearsalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RehearsalAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RehearsalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
