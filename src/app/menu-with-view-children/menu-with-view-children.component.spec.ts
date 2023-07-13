import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithViewChildrenComponent } from './menu-with-view-children.component';

describe('MenuWithViewChildrenComponent', () => {
  let component: MenuWithViewChildrenComponent;
  let fixture: ComponentFixture<MenuWithViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWithViewChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWithViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
