import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWithViewChildComponent } from './menu-with-view-child.component';

describe('MenuWithViewChildComponent', () => {
  let component: MenuWithViewChildComponent;
  let fixture: ComponentFixture<MenuWithViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWithViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWithViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
