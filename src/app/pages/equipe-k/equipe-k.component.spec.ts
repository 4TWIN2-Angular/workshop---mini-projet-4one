import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeKComponent } from './equipe-k.component';

describe('EquipeKComponent', () => {
  let component: EquipeKComponent;
  let fixture: ComponentFixture<EquipeKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
