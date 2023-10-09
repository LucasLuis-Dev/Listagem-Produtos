import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasdastroComponent } from './casdastro.component';

describe('CasdastroComponent', () => {
  let component: CasdastroComponent;
  let fixture: ComponentFixture<CasdastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasdastroComponent]
    });
    fixture = TestBed.createComponent(CasdastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
