import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtAuth } from '../../Models/jwtAuth';
import { Login } from '../../Models/login';
import { Register } from '../../Models/register';
import { AuthenticationService } from '../../Services/authentication.service';
import { CodVerificacao } from '../../Models/codVerificacao';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "hide";

  loginForm!: FormGroup;

  loginDto = new Login();
  registerDto = new Register();
  jwtDto = new JwtAuth();
  codVer = new CodVerificacao();

  constructor(private authService: AuthenticationService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.isText = !this.isText;
    this.type = this.isText ? "text" : "password";
  }

  onLogin() {
    if(this.loginForm.valid) {
      this.loginDto.login = this.loginForm.get('username')?.value;
      this.loginDto.senha = this.loginForm.get('password')?.value;
      this.authService.login(this.loginDto).subscribe((codVer) => {
        sessionStorage.setItem('codigo', codVer.codigo);
        const modal = document.getElementById('modalAcessarCodVerificacao');
        if (modal) {
          modal.classList.add('show');
          modal.style.display = 'block';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert("Login e/ou Senha inválidos!");
    }
  }
}
