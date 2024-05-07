import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankDetailsComponent } from './admin-bank-details.component';

describe('AdminBankDetailsComponent', () => {
  let component: AdminBankDetailsComponent;
  let fixture: ComponentFixture<AdminBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBankDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
