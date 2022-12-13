import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradequipeComponent } from './upgradequipe.component';

describe('UpgradequipeComponent', () => {
  let component: UpgradequipeComponent;
  let fixture: ComponentFixture<UpgradequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
