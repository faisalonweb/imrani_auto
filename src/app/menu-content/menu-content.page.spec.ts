import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuContentPage } from './menu-content.page';

describe('MenuContentPage', () => {
  let component: MenuContentPage;
  let fixture: ComponentFixture<MenuContentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
