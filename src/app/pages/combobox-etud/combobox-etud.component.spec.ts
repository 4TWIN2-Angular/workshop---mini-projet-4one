import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxEtudComponent } from './combobox-etud.component';

describe('ComboboxEtudComponent', () => {
  let component: ComboboxEtudComponent;
  let fixture: ComponentFixture<ComboboxEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
