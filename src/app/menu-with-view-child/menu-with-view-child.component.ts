import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-menu-with-view-child',
  templateUrl: './menu-with-view-child.component.html',
  styleUrls: ['./menu-with-view-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuWithViewChildComponent {

  @Input() width: number = 100;

  @ViewChild(MatMenuTrigger, { static: true, read: ElementRef }) menu!: ElementRef<HTMLElement>;

  get menuData() {
    return { menuWidth: this.menu.nativeElement.clientWidth };
  }

}
