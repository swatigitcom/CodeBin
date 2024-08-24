import { Component,Inject} from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(@Inject(AuthService) private authService: AuthService) {}

   email = new FormControl("",[
      Validators.required,
      Validators.email
    ])
    password = new FormControl("",[
      Validators.required,
      Validators.minLength(6)
    ])
    LoginForm = new FormGroup({
      email:this.email,
      password:this.password
    })
    Login(){ 
      this.authService.loginUser(this.LoginForm.value.email!,this.LoginForm.value.password!)
      
    }
    reset(){
      this.LoginForm.reset()
    }
    
  }

