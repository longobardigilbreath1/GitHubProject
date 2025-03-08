import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    confirmPassword: new FormControl('', Validators.minLength(6))
  });

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAsTouched();
    }
  }
}
