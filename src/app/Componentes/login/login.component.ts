import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtAuth } from '../../Models/jwtAuth';
import { Login } from '../../Models/login';
import { Register } from '../../Models/register';
import { AuthenticationService } from '../../Services/authentication.service';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { text } from 'stream/consumers';
import ValidateForm from '../shared/validateForm';
import { error } from 'console';
import { CodVerificacao } from '../../Models/codVerificacao';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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

  constructor(private authService: AuthenticationService, private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  OcultarVisuzlizarSenha() {
    this.isText = !this.isText;

    if(this.isText) {
      document.getElementById("eyeIconOff")?.classList.toggle("hide");
      document.getElementById("eyeIconOn")?.classList.toggle("hide");
      this.type = "text";
    }
    else {
      document.getElementById("eyeIconOff")?.classList.toggle("hide");
      document.getElementById("eyeIconOn")?.classList.toggle("hide");
      this.type = "password";
    }   
  }

  onLogin(loginDto: Login) {
    if(this.loginForm.valid) {
      this.authService.login(loginDto).subscribe((codVer) => {
        sessionStorage.setItem('codigo', this.codVer.codigo);
      });
    }
    else {
      ValidateForm.validarFormsFiels(this.loginForm);
      alert("Login e/ou Senha inválidos!");
    }
  }

  /*loginJwt(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', this.jwtDto.token);
    });
  }*/
}