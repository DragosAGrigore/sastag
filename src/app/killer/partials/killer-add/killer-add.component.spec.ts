import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerAddComponent } from './killer-add.component';

describe('KillerAddComponent', () => {
  let component: KillerAddComponent;
  let fixture: ComponentFixture<KillerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KillerAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KillerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
