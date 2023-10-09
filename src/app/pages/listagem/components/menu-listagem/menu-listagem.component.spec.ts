import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListagemComponent } from './menu-listagem.component';

describe('MenuListagemComponent', () => {
  let component: MenuListagemComponent;
  let fixture: ComponentFixture<MenuListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListagemComponent]
    });
    fixture = TestBed.createComponent(MenuListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
