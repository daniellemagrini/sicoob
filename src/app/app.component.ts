import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Componentes/login/login.component";
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { JwtAuth } from './Models/jwtAuth';
import { Login } from './Models/login';
import { Register } from './Models/register';
import { AuthenticationService } from './Services/authentication.service';
import { AuthenticationInterceptor } from './Services/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CodVerificacao } from './Models/codVerificacao';
import { CadastroUsuarioComponent } from './Componentes/cadastro-usuario/cadastro-usuario.component';
import { ParametrizacaoComponent } from './Componentes/parametrizacao/parametrizacao.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, LoginComponent, NavbarComponent, HomeComponent, HttpClientModule, FormsModule,
       ReactiveFormsModule, ToastrModule, CadastroUsuarioComponent, ParametrizacaoComponent
      ],
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }],
})
export class AppComponent {
  title = 'sicoob';
  loginDto = new Login();
  registerDto = new Register();
  jwtDto = new JwtAuth();
  codVer = new CodVerificacao();

  constructor(private authService: AuthenticationService){

  }
  
  /*login(loginDto: Login){
    this.authService.login(loginDto).subscribe((codVer) => {
      sessionStorage.setItem('codigo', this.codVer.codigo);
    });
  }*/

  /*login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', this.jwtDto.token);
    });
  }

  register(registerDto: Register) {
    this.authService.register(registerDto).subscribe();
  }

  usuario() {
    this.authService.getUsuario().subscribe((userData: any) => {
      console.log(userData);
    });
  }*/
}
