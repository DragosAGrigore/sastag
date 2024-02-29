import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerListComponent } from './killer-list.component';

describe('KillerListComponent', () => {
  let component: KillerListComponent;
  let fixture: ComponentFixture<KillerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KillerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
