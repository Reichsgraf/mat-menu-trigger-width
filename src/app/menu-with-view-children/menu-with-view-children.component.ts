import {AfterViewInit, Component, ElementRef, Input, OnChanges, QueryList, ViewChildren} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-menu-with-view-children',
  templateUrl: './menu-with-view-children.component.html',
  styleUrls: ['./menu-with-view-children.component.scss']
})
export class MenuWithViewChildrenComponent implements AfterViewInit, OnChanges {

  @Input() show: boolean = false;
  @Input() width: number = 100;

  // View Children with subscription on changes are needed because this HTMLElement is displayed dynamically due to
  // *ngIf directive
  @ViewChildren(MatMenuTrigger, {read: ElementRef}) menu!: QueryList<ElementRef<HTMLElement>>;
  menuData: { menuWidth: number } = { menuWidth: 0 };

  ngAfterViewInit() {
    // this code apply clientWidth only on AfterViewInit that fires once in lifecycle of component
    // TODO: make it update dynamically on width changes
    this.menu.changes.subscribe((res: QueryList<ElementRef<HTMLElement>>) => {
      this.menuData = {menuWidth: res.last?.nativeElement?.clientWidth || 0};
    });
  }

  ngOnChanges() {

  }

}
