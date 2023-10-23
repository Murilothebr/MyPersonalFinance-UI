import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

// Função de validação personalizada para a senha
export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValid = regex.test(control.value);
  return isValid ? null : { 'invalidPassword': true };
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;
  public isButtonDisabled: boolean = true;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator]),
    });

    this.registerForm.statusChanges.subscribe(() => {
      this.isButtonDisabled = this.registerForm.invalid;
    });
  }

  public onSubmit() {
    if (this.registerForm.valid) {
      this.authenticationService.register(
        this.registerForm.get('username')!.value,
        this.registerForm.get('email')!.value,
        this.registerForm.get('password')!.value
      );
    }
  }
}
