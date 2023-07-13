import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formBuilder = inject(FormBuilder);
  formGroup: FormGroup;

  constructor() {
    this.formGroup = this.formBuilder.group({
      width: [50],
      show: [false]
    })
  }

}
