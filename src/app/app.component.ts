import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TradEX';
  
}


// @Component({
//   selector: 'nz-demo-form-normal-login',
//   template: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   validateForm: FormGroup;

//   submitForm(): void {
//     for (const i in this.validateForm.controls) {
//       this.validateForm.controls[i].markAsDirty();
//       this.validateForm.controls[i].updateValueAndValidity();
//     }
//   }

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.validateForm = this.fb.group({
//       userName: [null, [Validators.required]],
//       password: [null, [Validators.required]],
//       remember: [true]
//     });
//   }
// }